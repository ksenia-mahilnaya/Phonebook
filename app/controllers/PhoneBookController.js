export default function PhoneBookController(PhoneBookService) {
    this.contacts = PhoneBookService.contacts;
    this.title = 'Phonebook';
    this.isPhoneNumbersVisible = true;
    this.addContact = PhoneBookService.addContact;
    this.removeContact = PhoneBookService.removeContact;
    this.getAll = PhoneBookService.getAll;
}
