//Store Object
(function(){angular.module("Store", ['ngRoute'])
	.controller('ProductsIndexController', function(){
		this.products = productData;
	});

	var productData = [
	{
		name:'Struggles',
		shortDescription: 'Doing whatever it to take surive',
		images: [
			{
			full: 'nycsample.jpg',
			thumb: 'nycsample.jpg'
			}],
		canPurchase: true,
		description:'The struggles that America face everyday.',
		price: 50.00,
		qty: 50,
		qtyOption:[
		{
			one:1,
			two:2,
			three:3,
			four:4,
			five:5

		}],
		
		sku: 'A100',
		display: true,
		production: true,
		votes:1000,
		expDate:07022017,
		sizes:[
		{
			xsmall:	'X-Small',
			small:	'Small',
			medium:	'Medium',
			large: 'Large',	
			xlarge:	'X-Large'
		}],
		reviews:[
		{
			stars:5,
			body:"I love this product!",
			author:"jma@gmail.com"
		}],

	},

	{
		name:'Pain',
		shortDescription: 'Losing it all',
		images: [
		{
			full: 'nycsample.jpg',
			thumb: 'nycsample.jpg'
		}],
		canPurchase: false,
		description:'The struggles that America face everyday.',
		price: 50.00,
		sku: 'A200',
		display: true,
		production: true,
		votes:0,
		expDate:07022017,
		reviews:[
		{
			stars:5,
			body:"I love this product!",
			author:"jma@gmail.com"
		}],

	},

	{
		name:'Love',
		shortDescription: 'Lust',
		images: [
		{
			full: 'nycsample.jpg',
			thumb: 'nycsample.jpg'
		}],
		canPurchase: false,
		description:'The struggles that America face everyday.',
		price: 50.00,
		sku: 'A300',
		display: true,
		production: true,
		votes:0,
		expDate:07022017,
		reviews:[
		{
			stars:5,
			body:"I love this product!",
			author:"jma@gmail.com"
		}],
	}
];
})();



