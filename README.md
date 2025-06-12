# signup-form
Homework
=======
README.md

# Task#1: Test cases
1. [Functional] [Negative] Submit empty signup form;
2. [Security] Test input fields against SQL injections;
3. [Accesibility] Verify each input field and form element has ARIA-label attribute.

# Task#2: Bugs

1. E-mail field accepts values with invalid e-mail domain.
Description: Registration form accepts an invalid email domain;

Steps to reproduce:
1. Go to the registration page: https://auth-home-task.vercel.app/register;
2. Fill and submit the signup form with the following data:
- Username: `Qwerty`;
- Email: `user@domain.l`;
- Password: `Password1`;
- Confirm Password: `Password1`;

Expected results: Email field is validated and an error message displayed: `"Enter a valid email address"`, and form is not submitted.
Actual results: No error message for E-mail value displayed and form submitted.

# Task#3: Automation script
The automated registration test is located in the [`tests/registration.test.js`](tests/registration.test.js) file.

# Task#4: Potential UI/UX improvements
1. Proper error messages for field validations informing user of what needs to be filled out (e.g. empty e-mail on submit returns message of “Invalid e-mail format” not “Please enter your E-mail address”);
2. Input fields are not highlighted enough on validation in case there are any errors - change the border color of input fields;
3. Success page:
    1. Green text message “You have registered successfully!” color lacks contrast against the background. The text “You have registered successfully!” could be used as H1 instead as the title "Welcome to the Home Page!” is redundant in this page;
    2. CTA button with text “Go To Registration” is redundant as the user has already registered. It should lead to a sign-in page or better yet authorize the user in app right away with the need to make any action;
4. Add “Show Password” option for Password and Confirm Password input fields.

# Task#5: Additional improvements of requirements
1. Add requirement to validate if username or email is already registered and how the system should respond;
2. Define expected behavior for network errors or server failures (e.g., retry logic, informative error messages);
3. Define acceptable maximum response times for validation and registration submission.


# Task#6: What else can be tested?
1. Email already in use (duplicate user scenario);
2. Form element behaviour/responsiveness on small screens;
3. Form submit with no network/throttling.

#Additional comments:
→ Password sent in plaintext;
→ Error message classes could be renamed better implement tests better, as well as element attributes for easier automation.
