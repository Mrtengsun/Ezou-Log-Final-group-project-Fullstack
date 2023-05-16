## Entities / Resources

### User

- email
- password
- name
- avatar
- author
  -Full Name
  -E-mail
  -Phone Number
  -Date of Birth
  -Place of Birth
  -Address:{
  --Street
  --House Number
  --Postal Code
  --State
  --Regin/Provence
  --City
  --Country
  }
  -Password
  -Company
  -Profession
  -Job Title
- Timestamps

### Websites

-user
-Name of the website
-API address

- Timestamps
<!--

### Sensitive Info

- author
  -Official Documents :{--Passport, --Id,--DriverLicense, --Insurance, --Bankcard}
  - Timestamps -->

### Message

- Title
- Content
- author
- Timestamps

### Live support Chat

-User
-Messages

### Community

-User
-Messages

### Routes

-Users
-Websites
-LiveSupport
-Messages

## API Design

- GET /
- POST /
- DELETE /
  -PUT /

# POST endpoints

- POST api/users/register
- POST api/users/login

# GET endpoints

-GET api/users
-GET api/users/:id

# DELETE endpoints

# PUT endpoints
