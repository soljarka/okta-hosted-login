/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { HttpClient } from '@angular/common/http';
import sampleConfig from '../.samples.config';

interface Claim {
  claim: String;
  value: String;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  claims: Array<Claim>;
    failed: Boolean;

  constructor(public oktaAuth: OktaAuthService, private http: HttpClient) {
    this.claims = [];
  }

  async ngOnInit() {
    const accessToken = await this.oktaAuth.getAccessToken();
    this.http.get(sampleConfig.resourceServer.userUrl, {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      }
    }).subscribe((data: any) => {
        console.log(data);
      const claims = Object.keys(data).map((key) => {
        return {
          claim: key,
          value: data[key]
         };
      });
      [].push.apply(this.claims, claims);
    }, (err) => {
      console.error(err);
      this.failed = true;
    });
  }


}
