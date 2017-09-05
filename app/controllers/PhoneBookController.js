export default function PhoneBookController(PhoneBookService) {
    this.contacts = PhoneBookService.contacts;
    this.title = 'Phonebook';
    //this.isPhoneNumbersVisible = true;
    this.addContact = function(name, phoneNumber) {
        PhoneBookService.addContact(name, phoneNumber);
        this.contactName = '';
        this.contactPhoneNumber = null;
    };
    this.removeContact = PhoneBookService.removeContact;
    this.getAll = PhoneBookService.getAll;
}
