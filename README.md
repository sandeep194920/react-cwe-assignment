I have developed two versions of this site,

- [Static website here](https://d1t5m28xcyh7ng.cloudfront.net/) - Deployed to AWS S3 + Cloudfront.
- [Dynamic website here](https://develop.dof4bajed850s.amplifyapp.com/) - Frontend deployed to AWS Amplify and Backend deployed to AWS EBS, [refer to this backend repo](https://github.com/sandeep194920/react-cwe-assignment-backend)

_I initially modified the redux code to make the functionality work (master branch of this repo)._

_Later, I built a [backend using NodeJS, MongoDB, Express](https://github.com/sandeep194920/react-cwe-assignment-backend), and also modified the front-end (develop branch of this repo)_

_Please refer to the `TODO.md` for more details_

# Context

Our software is a record-keeping system for a retirement plan. Plan members make contributions to the plan to save for
retirement, and those contributions are invested into their selection of investment vehicle (e.g. index fund). We work only with registered
accounts and plan members can specify how much of their contribution goes to RRSP and how much goes to TFSA. When members make changes to their contributions
(e.g. update or cancel) the changes do not take effect immediately.

In this project, your colleague has implemented "My Contributions" page with an ability to edit or cancel contributions. Unfortunately they had to take a sick leave and the status of their work is unknown.

# Problem

Your task is to complete your coleague's work. On this page plan members need to be able to edit or cancel their upcoming monthly contribution.

Acceptance criteria:

- Only upcoming (`PENDING`) contributions can be edited on cancelled.
- When user chooses to cancel their upcoming contribution we need to ask for confirmation with the following copy: `Are you sure you want to cancel this contribution?`

Use the following API endpoints:

- `PUT /contributions/:uuid` to save changes to a contribution
- `DELETE /contributions/:uuid` to cancel a contribution

These endpoints do not actually exist. You'll get 404 when you call them, so dont worry it's ok. Pretend is's a successful call.

# Optional

You can complete as many of these as you are able to (doing none is also ok).

- Implement the above enpoints
- Introduce SSR
- Deploy your solution to AWS

You may install any libraries or packages you deem necessary to complete your task. Also while implementing please feel free to refactor any code if you believe it's required to make it better. If there are improvements you would like to do that you don't have time to complete (or that are outside the scope of this project), or if there are questions or assumptions that affect your choices, please describe those in the file `TODO.md`.
