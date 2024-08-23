// // node objectQuestion.js
// // note : 12,13,14,15  done:11
// /*1. **Create a Simple Object**
//    - Task: Create an object representing a person with properties `name`, `age`, and `city`.
//    - Test:
//      ```javascript
//      const person = createPerson("John", 25, "New York");
//      console.log(person);
//      ```
//    - Expected Output: `{ name: 'John', age: 25, city: 'New York' }`
// */
// var person = {name:'John',age:25,city:'New York'}
// console.log(person)

// /*2. **Access Object Properties**
//    - Task: Write a function that returns the value of a given property from an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(getProperty(obj, 'name'));
//      ```
//    - Expected Output: `'Alice'`
// */
// function getProperty(obj,prop){
//     return obj[prop]
// }
// const obj = { name: 'alice', age: 30 };
// console.log(getProperty(obj, 'name'));

// /*3. **Add a New Property to an Object**
//    - Task: Write a function that adds a new property to an object.
//    - Test:
//      ```javascript
//      const car = { brand: 'Toyota', model: 'Corolla' };
//      addProperty(car, 'year', 2020);
//      console.log(car);
//      ```
//    - Expected Output: `{ brand: 'Toyota', model: 'Corolla', year: 2020 }`
// */
// function addProperty(obj,prop,value)

// {
//     obj[prop]=value
// }
// const car = { brand: 'Toyota', model: 'Corolla' };
// addProperty(car, 'year', 2020);
// console.log(car);

// /*
// 4. **Delete a Property from an Object**
//    - Task: Write a function that deletes a property from an object.
//    - Test:
//      ```javascript
//      const user = { username: 'john_doe', password: '12345' };
//      deleteProperty(user, 'password');
//      console.log(user);
//      ```
//    - Expected Output: `{ username: 'john_doe' }
// */
// var user = { username: 'john_doe', password: '12345' };
// delete user.password
// console.log(user);

// /*help:copiot
// 5. **Check if an Object has a Property**
//    - Task: Write a function that checks if an object has a specific property.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(hasProperty(obj, 'age'));
//      ```
//    - Expected Output: `true`
// */
// function hasProperty(obj, prop) {
//   return obj.hasOwnProperty(prop);// hasOwnProperty returns true if the property exists directly on the object.
  
// }
// const obj = { name: 'Alice', age: 30 };
// console.log(hasProperty(obj, 'age')); 


// /*6.help:copilot
//  **Merge Two Objects**
//    - Task: Write a function that merges two objects into one.
//    - Test:
//      ```javascript
//      const obj1 = { a: 1, b: 2 };
//      const obj2 = { b: 3, c: 4 };
//      console.log(mergeObjects(obj1, obj2));
//      ```
//    - Expected Output: `{ a: 1, b: 3, c: 4 }`
// */
// function mergeObjects(obj1,obj2){
//   return { ...obj1,...obj2 }
// }
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// console.log(mergeObjects(obj1, obj2));

// /*
// 7. **Clone an Object**
//    - Task: Write a function that creates a deep clone of an object.
//    - Test:
//      ```javascript
//      const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
//      const clone = cloneObject(original);
//      clone.details.city = 'LA';
//      console.log(original.details.city);
//      console.log(clone.details.city);
//      ```
//    - Expected Output:
//      ```
//      'NYC'
//      'LA'
//      ```*/
//      const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
//      const clone = {name:original.name,
//       details:{age:original.details.age,city:original.details.city}
//      }
     
//      clone.details.city = 'LA';
//      console.log(original.details.city);
//      console.log(clone.details.city);

    
     

  //   /* help:friend
  //    8. **Loop Through Object Properties**
  //  - Task: Write a function that loops through all the properties of an object and prints them.
  //  - Test:
  //    ```javascript
  //    const user = { name: 'John', age: 30, city: 'New York' };
  //    printProperties(user);
  //    ```
  //  - Expected Output:
  //    ```
  //    name: John
  //    age: 30
  //    city: New York
  //    ```*/
  //    const user = { name: 'John', age: 30, city: 'New York' };

  //    for (const key in user) {
  //       if (user.hasOwnProperty(key)) {
  //    console.log(`${key}: ${user[key]}`);
  //    }
  //    }
 

// /* 9. **Count the Number of Properties in an Object**
//    - Task: Write a function that counts the number of properties in an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30, city: 'NYC' };
//      console.log(countProperties(obj));
//      ```
//    - Expected Output: `3`*/
//    const object = { name: 
//     'Alice', age: 30, city: 'NYC' };
//    console.log(Object.keys(object).length)// O is capital



// /* 10. **Convert Object to Array of Keys**
//     - Task: Write a function that converts an object to an array of its keys.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectKeysToArray(obj));
//       ```
//     - Expected Output: `['name', 'age', 'city']`*/
//     const obj = { name: 'Alice', age: 30, city: 'NYC' };
//     console.log(Object.keys(obj))

// /* 11. **Convert Object to Array of Values**
//     - Task: Write a function that converts an object to an array of its values.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectValuesToArray(obj));
//       ```
//     - Expected Output: `['Alice', 30, 'NYC']`*/
//          const obj = { name: 'Alice', age: 30, city: 'NYC' };
//     console.log(Object.values(obj))


/* 12. **Convert an Array of Objects to a Single Object**
    - Task: Write a function that converts an array of objects into a single object. Assume each object in the array has a unique `key` property.
    - Test:
      ```javascript
      const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
      console.log(arrayToObject(arr));
      ```
    - Expected Output: `{ a: 1, b: 2 }`*/

/* 13. **Group Objects by a Property**
    - Task: Write a function that groups an array of objects by a specific property.
    - Test:
      ```javascript
      const users = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 20 },
        { name: 'Charlie', age: 30 }
      ];
      console.log(groupBy(users, 'age'));
      ```
    - Expected Output:
      ```javascript
      {
        20: [{ name: 'Bob', age: 20 }],
        30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }]
      }
      ```*/

/* 14. **Find the Object with the Maximum Value of a Property**
    - Task: Write a function that finds the object with the maximum value of a given property in an array of objects.
    - Test:
      ```javascript
      const users = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 20 },
        { name: 'Charlie', age: 35 }
      ];
      console.log(findMax(users, 'age'));
      ```
    - Expected Output: `{ name: 'Charlie', age: 35 }`*/

/* 15. **Sum the Values of a Specific Property in an Array of Objects**
    - Task: Write a function that sums the values of a specific property in an array of objects.
    - Test:
      ```javascript
      const items = [
        { name: 'item1', price: 10 },
        { name: 'item2', price: 15 },
        { name: 'item3', price: 20 }
      ];
      console.log(sumProperty(items, 'price'));
      ```
    - Expected Output: `45`    */   










