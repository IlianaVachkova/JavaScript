function solve() {
    var Person = (function () {
        function validateName(name) {
            if ((name.length < 3 || name.length > 20) || !/^[a-zA-Z ]+$/) {
                throw new Error('Invalid first/last name!');
            }
        }

        function validateAge(age) {
            if (age.toString() === '' || age != Number(age)) {
                throw new Error('Invalid age');
            }

            age = +age;

            if (age < 0 || age > 150) {
                throw new Error('Ivalid age!');
            }
        }

        function Person(firstname, lastname, age) {
            var _firstname, _lastname, _age;
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        }

        Person.prototype.introduce = function () {
            return 'Hello! My name is ' + this.firstname + ' ' + this.lastname +
                ' and I am ' + this.age + '-years-old'
        };

        Object.defineProperty(Person.prototype, 'firstname', {
            get: function () {
                return this._firstname;
            },
            set: function (value) {
                validateName(value);
                this._firstname = value;
            }
        });

        Object.defineProperty(Person.prototype, 'lastname', {
            get: function () {
                return this._lastname;
            },
            set: function (value) {
                validateName(value);
                this._lastname = value;
            }
        });

        Object.defineProperty(Person.prototype, 'age', {
            get: function () {
                return this._age;
            },
            set: function (value) {
                validateAge(value);
                this._age = value;
            }
        });

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

        return Person;
    }());

    return Person;
}
