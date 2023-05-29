class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UserInterface {
    addProduct(product) {
        const productList = document.getElementById('product-list')
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element)
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Product Deleted Successfully', 'danger');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000);
    }
}

//DOM Events
document.getElementById('product-form')
    .addEventListener('submit', (e) => {
    const productName = document.getElementById('name').value;
    const productPrice = document.getElementById('price').value;
    const productYear = document.getElementById('year').value;

    const product = new Product(productName, productPrice, productYear)
    
    const ui = new UserInterface();

    if (productName === '' || productPrice === '' || productPrice === '') {
        return ui.showMessage('Complete Fields Please', 'danger')
    }

    ui.addProduct(product);
    ui.resetForm();  
    ui.showMessage('Product Added Successfully', 'success')  ;


    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', (e) => {
   const ui = new UserInterface();
   ui.deleteProduct(e.target);
})