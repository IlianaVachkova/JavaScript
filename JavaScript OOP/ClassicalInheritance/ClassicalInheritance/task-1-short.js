function solve() {
    var Person = (function () {
        function Person(firstname, lastname, age) {
            if ((firstname.length < 3 || firstname.length > 20)
                || (lastname.length < 3 || lastname.length > 20) || !/^[a-zA-Z ]+$/) {
                throw new Error('Invalid first/last name!');
            }

            if (age <= 0 || age >= 150) {
                throw new Error('Ivalid age!');
            }

            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        }

        Object.defineProperty(Person.prototype, 'fullname', {
            get: function () {
                return this.firstname + ' ' + this.lastname;
            },
            set: function (value) {
                var name = value.split(' ');
                this.firstname = name[0];
                this.lastname = name[1];
            }
        });

        Person.prototype.introduce = function () {
            return 'Hello! My name is ' + this.firstname + ' ' + this.lastname +
                ' and I am ' + this.age + '-years-old'
        };

        return Person;
    }());

    return Person;
}