<!-- Please add further comments, questions, and improvements in this file -->

I have developed two versions of this site,

- [Dynamic website here](https://develop.dof4bajed850s.amplifyapp.com/) - Frontend deployed to AWS Amplify and Backend deployed to AWS EBS, [refer to this backend repo](https://github.com/sandeep194920/react-cwe-assignment-backend)

_I initially modified the redux code to make the functionality work (master branch of this repo)._

_Later, I built a [backend using NodeJS, MongoDB, Express](https://github.com/sandeep194920/react-cwe-assignment-backend), and also modified the front-end (develop branch of this repo)_

#### Tasks Done

- [x] Modified redux for this project. Added redux toolkit's query features and also slice features to leverage best practices. Note that, in the develop branch, I'm no longer using `redux` folder, but instead making use of `features` folder for redux.

- [x] When user clicks on any contribution other than the one having the 'Pending' status, the Accept and Cancel buttons will be disabled.

- [x] When a user clicks on a pending contribution and attempts to delete it, we display a delete confirmation message. If the user accepts the confirmation message, we proceed to delete it.

- [x] Changed the `Cancel` button in the Edit section to `Delete`? This way, users will not get the impression that they are canceling the Edit modal. We can change it back to `Cancel` if my reasoning doesn't seem appropriate, so please feel free to suggest on this point.

- [x] Deployed the dynamic site to [AWS Amplify](https://develop.dof4bajed850s.amplifyapp.com/), and AWS EBS where we are making use of Node, Express, MongoDB, [refer to this repo](https://github.com/sandeep194920/react-cwe-assignment-backend). I've also used AWS Codepipeline CI/CD for this.

- [x] In the dynamic site, I have fully modified the way redux was used. I have leveraged Redux toolkit Query (RTK Query) for async calls. Also, the data transformation is now done in backend and all the heavy lifting of data happens there.

#### TBD

- [ ] Show RRSP and TFSA amount on any individual contribution.
- [ ] Show RRSP and TFSA amount on any edit & delete pages of individual contribution.

#### Good to consider

- [ ] When the user tries to change the RRSP and TFSA amounts in the selected contribution, we can add certain validations. They can be as follows:
  - [ ] To check if they entered right numbers within the range.
  - [ ] To also check if the amount they entered for both RRSP and TFSA both exactly add up to their contribution.
