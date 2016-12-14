class Contact {

    constructor(obj){
        if (!obj.name){
            throw new Error("You must include a first name");
        } else if (typeof obj.name != "string"){
            throw new Error("First name must be a string");
        } else {
            this.name = obj.name;
        }

        if (!obj.company){
            throw new Error("You must include a last name");
        } else if (typeof obj.company != "string"){
            throw new Error("Last name must be a string");
        } else {
            this.company = obj.company;
        }

        if (!obj.email){
            throw new Error("You must include an email");
        } else if (typeof obj.email != "string"){
            throw new Error("Email must be a string");
        } else {
            this.email = obj.email;
        }

        if (!obj.message){
            throw new Error("You must include a message");
        } else if (typeof obj.message != "string"){
            throw new Error("Message must be a string");
        } else {
            this.message = obj.message;
        }

        this.sentDate = new Date();
    }
}

module.exports = Contact;