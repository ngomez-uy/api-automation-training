# API Automation Training

Welcome to the **API Automation Training**! This repository serves as the foundation for the training, providing a base API Automation Framework and step-by-step guidance for participants to build their API automation skills.

The training is designed for participants to fork this repository, develop their tests for a mock API, and create Pull Requests (PRs) for feedback and review. Mentors will review PRs regularly, providing feedback and guidance to ensure learning and progress.

---

## Training Objectives

1. **Learn the basics of TypeScript**:  
   Understand the fundamental features of TypeScript, including type annotations, interfaces, classes, and asynchronous programming. These concepts will help you write better, more maintainable code for API automation.

2. **Understand the Base Framework**:  
   Familiarize yourself with the provided TypeScript API Automation Framework using Mocha for test execution, Axios for HTTP requests, and Chai for assertions. Learn how the framework is structured and how to extend it for your testing needs.

3. **Learn API Automation Concepts**:  
   Grasp core concepts like service modeling (encapsulating API endpoints), organizing test cases, setting up environments with `.env` files, and strategies for functional and non-functional API testing.

4. **Implement Test Automation**:  
   Use the base framework to write tests for real-world scenarios using the [Petstore API](https://petstore.swagger.io/). Implement robust, maintainable test scripts for CRUD operations and edge cases.

5. **Collaborate Effectively**:  
   Develop skills in using Git workflows for version control. Create feature branches, submit Pull Requests (PRs), and respond to feedback from mentors. Learn best practices for working in an asynchronous environment while maintaining high-quality contributions.

---

## Training Milestones

### **Milestone 1: Learn the Basics of TypeScript**

**Objective**: Gain a foundational understanding of TypeScript to support API automation.

1. Fork and clone this repository.
2. Create a branch for this milestone
   
3. Complete an online TypeScript course:
   - Follow the [TypeScript Basics Course](https://learning.oreilly.com/course/ultimate-typescript-course/9781837027019/) to learn key concepts.
     
4. Practice writing TypeScript code as part of the course exercises.

5. Create a folder named `typescript-course` in your forked repository.

6. Add the practice code from the course to the `typescript-course` folder.

**Deliverable**:

- Create a PR with the `typescript-course` folder containing your practice code.
- Include a brief summary in the PR description highlighting the topics you covered and any challenges you faced.

---

### **Milestone 2: Setup and Explore**

**Objective**: Set up the framework and understand its structure.

1. Create a branch for this milestone
   
2. Move to the framework folder
   ```bash
    cd framework
    ```
   
3. Install dependencies and set up your environment:
    
    ```bash
    npm install
    cp example.env .env
    ```
    
4. Update .env with the test API base URL:
    
    ```yaml
    BASEURL=https://petstore.swagger.io/v2
    ```
    
5. Explore the framework:
    - Read the [API Automation Framework (TS+Mocha)](#api-automation-framework-tsmocha) Readme.
    - Understand the `ServiceBase` class and its usage in service models.

**Deliverable**:

- Create a PR with a short description of your setup process and initial findings.

---

### **Milestone 3: Service Model Creation and first test**

**Objective**: Create service models for the **Store** service.

1. Create a branch for this milestone
2. Create a new `StoreService` extending `ServiceBase`.
3. Implement methods for the following operations:
    - `GET /store/inventory`
    - `POST /store/order`
    - `GET /store/order/{orderId}`
    - `DELETE /store/order/{orderId}`
4. Add request and response models where appropriate.
5. Write the first test for the following scenario:
   - Create an order and validate the response (`POST /store/order`).

**Deliverable**:

- Create a PR with a description of your implementation process.

---

### **Milestone 4: Basic Test Automation**

**Objective**: Write tests for the rest of the Store service.

1. Write tests for the following scenarios:
    - Verify inventory is returned (`GET /store/inventory`).
    - Retrieve an order by ID and validate the data (`GET /store/order/{orderId}`).
    - Delete an order and verify the status code (`DELETE /store/order/{orderId}`).
2. Use tags like `@Smoke` or `@Regression` for test categorization.

**Deliverable**:

- Create a PR with the tests and a brief summary of the scenarios covered.

---

### **Milestone 5: Performance and Negative Testing**

**Objective**: Expand the test suite with performance and negative test cases.

1. Add performance checks for key endpoints (e.g., response time < 1000ms).
2. Write negative tests:
    - Attempt to retrieve a non-existent order (`GET /store/order/{invalidId}`).
    - Create an order with invalid data (`POST /store/order`).

**Deliverable**:

- Create a PR with the new tests and details on the edge cases covered.

---

### **Milestone 6: Extend to Other Services**

**Objective**: Implement automation for additional services (`Pet` and `User`).

1. Create service models for **Pet** and **User** services.
2. Implement key operations and tests:
    - For **Pet**: Add and retrieve pets.
    - For **User**: Create and authenticate users.

**Deliverable**:

- Create separate PRs for the service models and their respective tests.


---

## Workflow and Guidelines

1. **Fork the Repository**: Fork this repo to your GitHub account and create a local clone.
2. **Branching**: Use feature branches (e.g., `feature/store-service`) for your changes.
3. **Pull Requests**: Create PRs for each milestone. Include a description of your changes and any challenges faced.
4. **Code Reviews**: Mentors will review your PRs weekly or bi-weekly, providing feedback.
5. **Feedback**: Address feedback promptly and resubmit your PR.

---

## Schedule and Communication

- **Weekly Reviews**: Mentors will provide feedback and approval for completed milestones.
- **Support Channels**: Use the designated Slack/Teams/Discord channel for queries and discussions.

---

## Tips for Success

1. **Engage Actively**: Reach out for help if you're stuck or need clarification.
2. **Focus on Quality**: Write clean, maintainable code and meaningful tests.
3. **Learn from Feedback**: Incorporate mentor feedback to refine your implementation.

---

Find the API Framework documentation below.  