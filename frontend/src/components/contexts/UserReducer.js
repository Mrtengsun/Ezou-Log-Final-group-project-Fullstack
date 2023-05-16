const account = async (prev, action) => {
  if (action.type === "register") {
    try {
      const data = {
        firstName: action.firstName.current.value,
        lastName: action.lastName.current.value,
        email: action.email.current.value,
        password: action.password.current.value,
        dateOfBirth: action.dateOfBirth.current.value,
        placeOfBirth: action.placeOfBirth.current.value,
        gender: action.gernda.current.value,
        phoneNumber: parseInt(action.phoneNummer.current.value),
        company: action.company.current.value,
        address: {
          street: action.streetAndNumber.current.value,
          postalCode: parseInt(action.postCode.current.value),
          state: action.state.current.value,
          country: action.country.current.value,
        },

        profession: action.profession.current.value,
      };
      const register = await fetch("/api/user/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });
      const user = await register.json();

      if (user._id) {
        action.navigate("login");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default account;
