const listOfCategories = document.querySelector('#categories');
const listOfItems = listOfCategories.querySelectorAll(".item");
console.log(`Number of categories: ${listOfItems.length}`);

listOfItems.forEach(element =>
{
    const listOfTitles = element.querySelector('h2');
    const listOfElements = element.querySelectorAll('ul li');
    console.log(`Category: ${listOfTitles.textContent}`);
    console.log(`Elements: ${listOfElements.length}`);
     
}
    );

//////////////////////////////////////////////////////////////////

const styles = document.createElement('style');
styles.textContent =
  ` #categories{
      
    }
       
 `;
document.head.append(styles);

