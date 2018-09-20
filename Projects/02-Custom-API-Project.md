# Custom Authenticated API Project

It's time to get creative and write the authenticated API of your dreams!

## Objectives

1. Practice the SDLC by **completing a project from proposal to deployment** with a **focus on Test Driven Development** practices.
1. **Utilize all the techniques learned** in class **in a single cohesive project**.
1. Produce a **portfolio-worthy authenticated API** to show off to the world!

## Requirements

### Functional Requirements

1. At least one **nested route or resource** as covered on [Day 3](../03-Nested-Routes-and-Resources/README.md) of class.
1. The ability to **CREATE**, **READ**, **UPDATE**, and **DELETE** the object(s) in your API.
1. At least **one of each** endpoint: `GET`, `POST`, `PUT`, and `DELETE`.
1. A **database persistence layer** (e.g. MongoDB)
1. The ability to **securely provision an API user** using the authorization and authentication techniques learned on Days [7](../07-Authentication-Sessions-vs-JWT/README.md), [8](../08-Authentication-with-Sessions-and-Cookies/README.md), [10](../10-Authorization/README.md), and [11](11-Testing-Authentication-and-Authorization/README.md) of class. **Unauthenticated users should not be able to use the API!**
1. Project contains a **simple, static single page brochure site** that explains what the API does and a link to the API's documentation.

### Non-Functional Requirements

1. The API must be written using the **appropriate application of RESTful techniques**.
1. The API implementation must **follow the MVC pattern**.
1. The API must be hosted in a **public GitHub repository**.
1. The project repository **should not expose any secrets**!
1. The API must have a discernible theme or **serve a distinct purpose**. See the [Examples](#Examples) for well-themed and purposed APIs.
1. The final project must be **deployed and fully accessible** via the internet and **callable via any consumer**.
1. The final project must be **fully documented**.
1. Must **develop the API using a TDD approach** as discussed in class on [Day 9](../09-TDD/README.md).
1. The syntax in the final project deliverable will **adhere to [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)**.

### Level Up - API + Skills (_Optional_)

**NOTE**: `++` indicates the ability to level up the preceding skill through the following stretch challenges:

1. **`Code++`**: Love integrations? Find a clever way to **utilize a third-party API _within_ your API**!
1. **`DevOps++`**: Deploy API and brochure site over **HTTPS**.
1. **`Networking++`**: Write and **post a short blog** on Medium, Hacker News, or dev.to debuting and promoting your life-changing new API! Sign up now!

## Example APIs

* [List of Public APIs](https://github.com/toddmotto/public-apis) - Giant list of public APIs to inspire you!
* [The Rick and Morty API](https://rickandmortyapi.com) - Excellent single page brochure site with easy to find About and Documentation links. Very clear documentation.
* [Adorable Avatars](http://avatars.adorable.io) - Beautiful brochure site, easy to use and direct API. Great docs and FAQ!
* [JSONPlaceholder](http://jsonplaceholder.typicode.com) - Clean and minimalist one page site and documentation for a very simple API. Love the 'Try It!' buttons!

## Implementation Notes

### `dotenv` - Keeping Secrets Safe

* Look into the [dotenv](https://www.npmjs.com/package/dotenv) package on NPM. This package will allow you to store secrets in a `.env` file that you deliberately add to the project's `.gitignore` file. Be sure to **read the documentation** fully!

### Heroku Deployment

* Make sure the `Access-Control-Allow-Origin` header is set to `*` so that requests to your API can be made from any domain!

## Schedule

A **sample daily outline** is provided to assist you in planning your sprint:

* **Day 07**: Brainstorm ideas for your API.
* **Day 08**: Write API proposal.
* **Day 09**: Write API tests.
* **Day 10**: Continue writing API tests.
* **Day 11**: Write Authentication and Authorization tests.
* **Day 12**: Implement API.
* **Day 13**: Implement API.
* **Day 14**: Documentation and deployment.

### Phases and Deadlines

1. **Phase 1**: Proposal - **Due Day 8 @ 11:59pm**.
    * **Deliverables**:
        * Public GitHub Repository Link
        * `README.md` in the repo with proposal.
    * **Approval**: Instructor will approve projects by **start of class on Day 9**.
1. **Phase 2**: Test First Approach - **Due Day 11 @ 11:59pm**.
    * **Deliverables**:
        * `/tests/` folder in repo containing TDD code and strategy.
    * **Code Review 1**: Instructor will review TDD strategy and make notes in each student repo. This will be complete by the **start of class on Day 12**,
1. **Phase 3**: Final Deliverable - **Due Day 14 @ 11:59pm**.
    * **Deliverables**:
        * Link to deployed API brochure site.
    * **Code Review 2**: Students receive after class.

## Getting Started

Fork the provided [**auth-api-starterpack**](https://github.com/droxey/auth-api-starterpack) repository and examine the contents to reveal the next steps!

## Additional Resources

