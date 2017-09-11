import angular from 'angular';

export default function phoneBookService() {
    const contacts = [
        {
            name: 'Ann',
            phoneNumber: '+375(33)4366445'

        }, {
            name: 'Max',
            phoneNumber: '+375(29)4562387'
        }, {
            name: 'Brom',
            phoneNumber: '+375(44)4562786'
        }, {
            name: 'Dave',
            phoneNumber: '+375(22)3453455'
        }, {
            name: 'Alonso',
            phoneNumber: '+375(33)6767674'
        }, {
            name: 'Biber',
            phoneNumber: '+375(33)2347876'
        }, {
            name: 'Joe',
            phoneNumber: '+375(25)4366445'
        }, {
            name: 'Bucket',
            phoneNumber: '+375(25)7777654'
        }, {
            name: 'Donald',
            phoneNumber: '+375(44)4366445'
        }, {
            name: 'Aloha',
            phoneNumber: '+375(44)234567'
        }, {
            name: 'Chip',
            phoneNumber: '+375(29)4562345'
        }];

    //localStorage.clear();

    const contactsJSON = localStorage.getItem("contacts");
    let allContacts = contactsJSON ? angular.fromJson(contactsJSON) : contacts;

    this.getContactIndex = function(name, phoneNumber) {
        const indexOfContact = allContacts.findIndex(
            (item) => item.name === name && item.phoneNumber === phoneNumber
        );
        return indexOfContact;
    };

    this.getContact = function(indexOfContact) {
        return allContacts[indexOfContact];
    };

    this.addContact = function(name, phoneNumber) {
        const isExistSuchContact = this.getContactIndex(name, phoneNumber) !== -1;
        if (name && phoneNumber && (!isExistSuchContact)) {
            allContacts.push({
                name: name,
                phoneNumber: phoneNumber
            });
            localStorage.setItem('contacts', angular.toJson(allContacts));
        } else {
            console.error('All fields are required || Such contact already exists');
        }
    };

    this.removeContact = function(name, phoneNumber) {
        const indexContactToRemove = this.getContactIndex(name, phoneNumber);
        allContacts.splice(indexContactToRemove, 1);
        localStorage.setItem('contacts', angular.toJson(allContacts));
    };

    this.editContact = function(newName, newPhoneNumber, indexOfContact) {
        allContacts[indexOfContact].name = newName;
        allContacts[indexOfContact].phoneNumber = newPhoneNumber;
        localStorage.setItem('contacts', angular.toJson(allContacts));
    };

    this.getAll = function() {
        return allContacts;
    };

}
