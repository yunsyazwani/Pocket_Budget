$( document ).ready(function() {
	
	//array, malay baylead dgn pepper and so on...
	var malay = [//kene taip satu2 :'(
	//gambar is key, dalam "" is value , 
	
		{gambar: "assets/images/bayleaf/nasi putih.jpg", cafe: "Bay Leaf", nama: "Nasi Putih", harga: 1.00 },//contoh
		{gambar: "assets/images/bayleaf/nasi lemak.jpg", cafe: "Bay Leaf", nama: "Nasi Lemak", harga: 2.50 },
		{gambar: "assets/images/bayleaf/nasi goreng.png", cafe: "Bay Leaf", nama: "Nasi Goreng", harga: 2.00 },
		{gambar: "assets/images/bayleaf/mee.jpg", cafe: "Bay Leaf", nama: "Aneka Mee", harga: 2.00 },
		{gambar: "assets/images/bayleaf/ikan keli.jpg", cafe: "Bay Leaf", nama: "Ikan Keli", harga: 3.00 },
		
		{gambar: "assets/images/bayleaf/ikan lolong.jpg", cafe: "Bay Leaf", nama: "Ikan Lolong", harga: 2.50 },
		{gambar: "assets/images/bayleaf/ikan kembung.jpg", cafe: "Bay Leaf", nama: "Ikan Kembung", harga: 3.00 },
		{gambar: "assets/images/bayleaf/ikan kerisi.jpg", cafe: "Bay Leaf", nama: "Ikan Kerisi", harga: 3.00 },
		{gambar: "assets/images/bayleaf/ikan cencaru.jpg", cafe: "Bay Leaf", nama: "Ikan Cencaru", harga: 4.00 },
		{gambar: "assets/images/bayleaf/ikan patin.jpg", cafe: "Bay Leaf", nama: "Ikan Patin", harga: 3.00 },
		
		{gambar: "assets/images/bayleaf/ayam goreng.jpg", cafe: "Bay Leaf", nama: "Ayam Goreng", harga: 2.50 },
		{gambar: "assets/images/bayleaf/ayam berkuah.jpg", cafe: "Bay Leaf", nama: "Ayam Berkuah", harga: 2.50 },
		{gambar: "assets/images/bayleaf/hati pedal.jpg", cafe: "Bay Leaf", nama: "Hati / Pedal", harga: 3.00 },
		{gambar: "assets/images/bayleaf/paru.jpg", cafe: "Bay Leaf", nama: "Paru", harga: 3.00 },
		{gambar: "assets/images/bayleaf/daging.jpg", cafe: "Bay Leaf", nama: "Daging", harga: 3.00 },

		{gambar: "assets/images/bayleaf/telur mata.jpg", cafe: "Bay Leaf", nama: "Telur Mata", harga: 1.00 },
		{gambar: "assets/images/bayleaf/telur dadar.jpg", cafe: "Bay Leaf", nama: "Telur Dadar", harga: 1.50 },
		{gambar: "assets/images/bayleaf/telur sambal.jpg", cafe: "Bay Leaf", nama: "Telur Sambal", harga: 1.00 },
		{gambar: "assets/images/bayleaf/sayur.jpg", cafe: "Bay Leaf", nama: "Sayur", harga: 1.00 },
		{gambar: "assets/images/bayleaf/tauhu jepun.jpg", cafe: "Bay Leaf", nama: "Tauhu Jepun", harga: 1.00 },
		{gambar: "assets/images/bayleaf/tauhu.jpg", cafe: "Bay Leaf", nama: "Tauhu Biasa", harga: 0.50 },

		{gambar: "assets/images/pepper/nasi putih.jpg", cafe: "Pepper", nama: "Nasi Putih", harga: 1.00 },
		{gambar: "assets/images/pepper/nasi lemak.jpg", cafe: "Pepper", nama: "Nasi Lemak", harga: 1.50 },
		{gambar: "assets/images/pepper/nasi goreng.jpg", cafe: "Pepper", nama: "Nasi Goreng", harga: 2.00 },
		{gambar: "assets/images/pepper/mee.jpg", cafe: "Pepper", nama: "Aneka Mee", harga: 2.00 },
		{gambar: "assets/images/pepper/nasi ayam.jpg", cafe: "Pepper", nama: "Nasi Ayam", harga: 4.50 },
		
		{gambar: "assets/images/pepper/ayam goreng.jpg", cafe: "Pepper", nama: "Ayam Goreng", harga: 2.50 },
		{gambar: "assets/images/bayleaf/telur mata.jpg", cafe: "Pepper", nama: "Telur Mata", harga: 1.00 },
		{gambar: "assets/images/bayleaf/ikan keli.jpg", cafe: "Pepper", nama: "Ikan Keli Berlada ", harga: 3.00 },
		{gambar: "assets/images/pepper/tempe berlada.jpg", cafe: "Pepper", nama: "Tempe Berlada", harga: 2.00 },
		{gambar: "assets/images/pepper/ayam masak merah.jpg", cafe: "Pepper", nama: "Ayam Merah", harga: 3.00 },
		
		{gambar: "assets/images/pepper/kari.jpg", cafe: "Pepper", nama: "Kari Daging", harga: 3.00 },
		{gambar: "assets/images/pepper/sayur campur.jpg", cafe: "Pepper", nama: "Sayur Campur", harga: 2.00 },
		{gambar: "assets/images/pepper/taugeh goreng.jpg", cafe: "Pepper", nama: "Taugeh Goreng", harga: 2.00 },
		
		{gambar: "assets/images/chefsharmiza/Bakso.jpg", cafe: "Chef Shazmira", nama: "Bakso", harga: 4.00 },
		{gambar: "assets/images/chefsharmiza/Bihun Sup.jpg", cafe: "Chef Shazmira", nama: "Bihun Sup", harga: 3.50 },
		{gambar: "assets/images/chefsharmiza/Bubur Nasi.jpg", cafe: "Chef Shazmira ", nama: "Bubur Nasi", harga: 3.00 },
		{gambar: "assets/images/chefsharmiza/Laksa Penang.jpg", cafe: "Chef Shazmira ", nama: "Laksa Penang", harga: 3.50 },
		{gambar: "assets/images/chefsharmiza/Mee Kari.jpg", cafe: "Chef Shazmira ", nama: "Mee Kari", harga: 4.00 },
		{gambar: "assets/images/chefsharmiza/Mee Sup.jpg", cafe: "Chef Shazmira ", nama: "Mee Sup", harga: 4.00 },



	];
	
		var western = [//kene taip satu2 :'(
	//gambar is key, dalam "" is value , 
	
		
		{gambar: "assets/images/chefsharmiza/Chicken Chop.jpg", cafe: "Chef Shazmira ", nama: "Chicken Chop", harga: 7.50 },
		{gambar: "assets/images/chefsharmiza/Fish Chips.jpg", cafe: "Chef Shazmira ", nama: "Fish and Chips", harga: 6.50 },
		{gambar: "assets/images/chefsharmiza/Fries Mayo.jpg", cafe: "Chef Shazmira ", nama: "Fries Mayo", harga: 3.50 },
		{gambar: "assets/images/chefsharmiza/Garlic Bread.jpg", cafe: "Chef Shazmira ", nama: "Garlic Bread", harga: 1.00 },
		{gambar: "assets/images/chefsharmiza/Lamb Chops.jpg", cafe: "Chef Shazmira ", nama: "Lamb Chops", harga: 10.00 },
		
		{gambar: "assets/images/chefsharmiza/Mushroom Soup.jpg", cafe: "Chef Shazmira ", nama: "Mushroom Soup", harga: 3.00 },
		{gambar: "assets/images/chefsharmiza/Spaghetti Bolognese.png", cafe: "Chef Shazmira ", nama: "Spaghetti Bolognese", harga: 6.00 },
		{gambar: "assets/images/chefsharmiza/Spaghetti Carbonara.jpg", cafe: "Chef Shazmira ", nama: "Spaghetti Carbonara", harga: 6.00 },
		{gambar: "assets/images/chefsharmiza/Spaghetti Seafood Olio.jpg", cafe: "Chef Shazmira ", nama: "Spaghetti Seafood Olio", harga: 5.50 },
		
		{gambar: "assets/images/woodydolly/black pepper meatball mushroom.jpg", cafe: "The Woodydolly", nama: "Black pepper Meatball Mushroom", harga: 4.00 },
		{gambar: "assets/images/woodydolly/baked beef pasta.jpg", cafe: "The Woodydolly", nama: "Baked Beef Pasta", harga: 4.50 },
		{gambar: "assets/images/woodydolly/baked creamy pasta.jpg", cafe: "The Woodydolly", nama: "Baked Creamy Chicken", harga: 4.50 },
		{gambar: "assets/images/woodydolly/beef lasagna.jpeg", cafe: "The Woodydolly", nama: "Beef / Chicken Lasagna ", harga: 6.00 },

		{gambar: "assets/images/obreak/nugget.png", cafe: "Obreak Resources", nama: "Nugget", harga: 3.50 },
    	{gambar: "assets/images/obreak/fries.jpg", cafe: "Obreak Resources", nama: "Fries", harga: 2.50 },
    	{gambar: "assets/images/obreak/burger.jpg", cafe: "Obreak Resources", nama: "Burger", harga: 3.00 },
    	{gambar: "assets/images/obreak/wedges.png", cafe: "Obreak Resources", nama: "Wedges", harga: 4.80 },
    	{gambar: "assets/images/obreak/waffle.png", cafe: "Obreak Resources", nama: "Waffle", harga: 3.00 },


	];
	
	var dessert = [//kene taip satu2 :'(
	//gambar is key, dalam "" is value , 
	
		{gambar: "assets/images/bayleaf/donut.jpg", cafe: "Bay Leaf", nama: "Donat", harga: 1.00 },
		{gambar: "assets/images/bayleaf/pau goreng.jpg", cafe: "Bay Leaf", nama: "Pau Goreng", harga: 1.00 },
		{gambar: "assets/images/bayleaf/mini burger.jpg", cafe: "Bay Leaf", nama: "Mini Burger", harga: 1.00 },
		{gambar: "assets/images/bayleaf/popia.jpg", cafe: "Bay Leaf", nama: "Popia", harga: 1.00 },
		{gambar: "assets/images/bayleaf/kuih lapis.jpg", cafe: "Bay Leaf", nama: "Kuih Lapis", harga: 1.00 },
		{gambar: "assets/images/bayleaf/seri muka.jpg", cafe: "Bay Leaf", nama: "Seri Muka", harga: 1.00 },
		{gambar: "assets/images/bayleaf/kuih bakar.jpg", cafe: "Bay Leaf", nama: "Kuih Bakar", harga: 1.00 },

		{gambar: "assets/images/woodydolly/oreo.jpg", cafe: "The Woodydolly", nama: "Oreo Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/pandan.png", cafe: "The Woodydolly", nama: "Pandan Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/marble.jpg", cafe: "The Woodydolly", nama: "Marble Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/blueberry.jpg", cafe: "The Woodydolly", nama: "Blueberry Cheese Cake", harga: 3.50 },
		
		{gambar: "assets/images/woodydolly/durian.jpg", cafe: "The Woodydolly", nama: "Durian Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/nutella.jpg", cafe: "The Woodydolly", nama: "Nutella Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/greentea.jpg", cafe: "The Woodydolly", nama: "Green Tea Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/mangos.jpg", cafe: "The Woodydolly", nama: "Mango Cheese Cake", harga: 8.00 },
		{gambar: "assets/images/woodydolly/tiramisu.jpg", cafe: "The Woodydolly", nama: "Tiramisu", harga: 3.50 },
		
		{gambar: "assets/images/sehain/abc.jpg", cafe: "Sehain Dessert", nama: "ABC", harga: 2.99 },


	];
	
	var drink = [//kene taip satu2 :'(
	//gambar is key, dalam "" is value , 
	
		
		{gambar: "assets/images/bayleaf/teh.jpg", cafe: "Bay Leaf", nama: "Air Teh", harga: 1.30 },
		{gambar: "assets/images/bayleaf/nescafe.jpg", cafe: "Bay Leaf", nama: "Air Nescafe", harga: 1.30 },
		{gambar: "assets/images/bayleaf/milo.jpg", cafe: "Bay Leaf", nama: "Air Milo", harga: 1.30 },
		{gambar: "assets/images/bayleaf/air jagung.jpg", cafe: "Bay Leaf", nama: "Air Jagung", harga: 1.30 },
		{gambar: "assets/images/bayleaf/teh o.jpg", cafe: "Bay Leaf", nama: "Air Teh o", harga: 1.00 },
		
		{gambar: "assets/images/bayleaf/sirap.jpg", cafe: "Bay Leaf", nama: "Air Sirap", harga: 1.00 },
		{gambar: "assets/images/bayleaf/air anggur.jpg", cafe: "Bay Leaf", nama: "Air Anggur", harga: 1.00 },
		{gambar: "assets/images/bayleaf/teh bunga.jpg", cafe: "Bay Leaf", nama: "Teh Bunga", harga: 1.00 },
		{gambar: "assets/images/bayleaf/air barli.jpg", cafe: "Bay Leaf", nama: "Air Barli ", harga: 1.00 },
		{gambar: "assets/images/bayleaf/air mangga.jpg", cafe: "Bay Leaf", nama: "Air Mangga", harga: 1.00 },	
		{gambar: "assets/images/bayleaf/air oren.jpg", cafe: "Bay Leaf", nama: "Air Oren ", harga: 1.00 },
		
		{gambar: "assets/images/pepper/teh.jpg", cafe: "Papper", nama: "Air Teh", harga: 1.30 },
		{gambar: "assets/images/pepper/nescafe.jpg", cafe: "Papper", nama: "Air Nescafe", harga: 1.30 },
		{gambar: "assets/images/pepper/milo.jpg", cafe: "Papper", nama: "Air Milo", harga: 1.30 },
		{gambar: "assets/images/pepper/sirap limau.jpg", cafe: "Papper", nama: "Sirap Limau", harga: 1.30 },
		{gambar: "assets/images/pepper/teh o.jpg", cafe: "Papper", nama: "Air Teh o", harga: 1.00 },
		
		{gambar: "assets/images/pepper/sirap.jpg", cafe: "Papper", nama: "Air Sirap", harga: 1.00 },
		{gambar: "assets/images/pepper/air anggur.jpg", cafe: "Papper", nama: "Air Anggur", harga: 1.00 },
		{gambar: "assets/images/pepper/sunquick.jpg", cafe: "Papper", nama: "Air Sanquick", harga: 1.00 },
		{gambar: "assets/images/pepper/sarsi.jpg", cafe: "Papper", nama: "Air Sarsi", harga: 1.00 },
		
		{gambar: "assets/images/woodydolly/mango.jpg", cafe: "The Woodydolly", nama: "Soda Lemonade Mango", harga: 3.00 },
		{gambar: "assets/images/woodydolly/kiwi.jpg", cafe: "The Woodydolly", nama: "Soda Lemonade Kiwi", harga: 3.00 },
		{gambar: "assets/images/woodydolly/blackcurrent.jpg", cafe: "The Woodydolly", nama: "Soda Lemonade Blackcurrent", harga: 3.00 },
		{gambar: "assets/images/woodydolly/strawberry.jpg", cafe: "The Woodydolly", nama: "Soda Lemonade Strawberry", harga: 3.00 },
		{gambar: "assets/images/woodydolly/hotcup.jpg", cafe: "The Woodydolly", nama: "Hot cup Coffee", harga: 2.00 },
		{gambar: "assets/images/woodydolly/shake.jpg", cafe: "The Woodydolly", nama: "Milkshake", harga: 5.00 },
		
		{gambar: "assets/images/sehain/coffee.jpg", cafe: "Sehain Dessert", nama: "Kopi Thailand", harga: 3.50 },

		{gambar: "assets/images/obreak/juice.jpg", cafe: "Obreak Resources", nama: "Fruit Juice", harga: 3.00 },
		{gambar: "assets/images/obreak/milkshake.jpg", cafe: "Obreak Resources", nama: "Milkshake", harga: 3.00 },

	];
	
	var semua = [//kene taip satu2 :'(
	//gambar is key, dalam "" is value , 
	
		
		{gambar: "assets/images/bayleaf/nasi putih.jpg", cafe: "Bay Leaf", nama: "Nasi Putih", harga: 1.00 },//contoh
		{gambar: "assets/images/bayleaf/nasi lemak.jpg", cafe: "Bay Leaf", nama: "Nasi Lemak", harga: 2.50 },
		{gambar: "assets/images/bayleaf/nasi goreng.jpg", cafe: "Bay Leaf", nama: "Nasi Goreng", harga: 2.00 },
		{gambar: "assets/images/bayleaf/mee.jpg", cafe: "Bay Leaf", nama: "Aneka Mee", harga: 2.00 },
		{gambar: "assets/images/bayleaf/ikan keli.jpg", cafe: "Bay Leaf", nama: "Ikan Keli", harga: 3.00 },
		
		{gambar: "assets/images/bayleaf/ikan lolong.jpg", cafe: "Bay Leaf", nama: "Ikan Lolong", harga: 2.50 },
		{gambar: "assets/images/bayleaf/ikan kembung.jpg", cafe: "Bay Leaf", nama: "Ikan Kembung", harga: 3.00 },
		{gambar: "assets/images/bayleaf/ikan kerisi.jpg", cafe: "Bay Leaf", nama: "Ikan Kerisi", harga: 3.00 },
		{gambar: "assets/images/bayleaf/ikan cencaru.jpg", cafe: "Bay Leaf", nama: "Ikan Cencaru", harga: 4.00 },
		{gambar: "assets/images/bayleaf/ikan patin.jpg", cafe: "Bay Leaf", nama: "Ikan Patin", harga: 3.00 },
		
		{gambar: "assets/images/bayleaf/ayam goreng.jpg", cafe: "Bay Leaf", nama: "Ayam Goreng", harga: 2.50 },
		{gambar: "assets/images/bayleaf/ayam berkuah.jpg", cafe: "Bay Leaf", nama: "Ayam Berkuah", harga: 2.50 },
		{gambar: "assets/images/bayleaf/hati pedal.jpg", cafe: "Bay Leaf", nama: "Hati / Pedal", harga: 3.00 },
		{gambar: "assets/images/bayleaf/paru.jpg", cafe: "Bay Leaf", nama: "Paru", harga: 3.00 },
		{gambar: "assets/images/bayleaf/daging.jpg", cafe: "Bay Leaf", nama: "Daging", harga: 3.00 },

		{gambar: "assets/images/bayleaf/telur mata.jpg", cafe: "Bay Leaf", nama: "Telur Mata", harga: 1.00 },
		{gambar: "assets/images/bayleaf/telur dadar.jpg", cafe: "Bay Leaf", nama: "Telur Dadar", harga: 1.50 },
		{gambar: "assets/images/bayleaf/telur sambal.jpg", cafe: "Bay Leaf", nama: "Telur Sambal", harga: 1.00 },
		{gambar: "assets/images/bayleaf/sayur.jpg", cafe: "Bay Leaf", nama: "Sayur", harga: 1.00 },
		{gambar: "assets/images/bayleaf/tauhu jepun.jpg", cafe: "Bay Leaf", nama: "Tauhu Jepun", harga: 1.00 },
		{gambar: "assets/images/bayleaf/tauhu.jpg", cafe: "Bay Leaf", nama: "Tauhu Biasa", harga: 0.50 },

		{gambar: "assets/images/pepper/nasi putih.jpg", cafe: "Pepper", nama: "Nasi Putih", harga: 1.00 },
		{gambar: "assets/images/pepper/nasi lemak.jpg", cafe: "Pepper", nama: "Nasi Lemak", harga: 1.50 },
		{gambar: "assets/images/pepper/nasi goreng.jpg", cafe: "Pepper", nama: "Nasi Goreng", harga: 2.00 },
		{gambar: "assets/images/pepper/mee.jpg", cafe: "Pepper", nama: "Aneka Mee", harga: 2.00 },
		{gambar: "assets/images/pepper/nasi ayam.jpg", cafe: "Pepper", nama: "Nasi Ayam", harga: 4.50 },
		
		{gambar: "assets/images/pepper/ayam goreng.jpg", cafe: "Pepper", nama: "Ayam Goreng", harga: 2.50 },
		{gambar: "assets/images/bayleaf/telur mata.jpg", cafe: "Pepper", nama: "Telur Mata", harga: 1.00 },
		{gambar: "assets/images/bayleaf/ikan keli.jpg", cafe: "Pepper", nama: "Ikan Keli Berlada ", harga: 3.00 },
		{gambar: "assets/images/pepper/tempe berlada.jpg", cafe: "Pepper", nama: "Tempe Berlada", harga: 2.00 },
		{gambar: "assets/images/pepper/ayam masak merah.jpg", cafe: "Pepper", nama: "Ayam Merah", harga: 3.00 },
		
		{gambar: "assets/images/pepper/kari.jpg", cafe: "Pepper", nama: "Kari Daging", harga: 3.00 },
		{gambar: "assets/images/pepper/sayur campur.jpg", cafe: "Pepper", nama: "Sayur Campur", harga: 2.00 },
		{gambar: "assets/images/pepper/taugeh goreng.jpg", cafe: "Pepper", nama: "Taugeh Goreng", harga: 2.00 },
		
		{gambar: "assets/images/chefsharmiza/Bakso.jpg", cafe: "Chef Shazmira ", nama: "Bakso", harga: 4.00 },
		{gambar: "assets/images/chefsharmiza/Bihun Sup.jpg", cafe: "Chef Shazmira ", nama: "Bihun Sup", harga: 3.50 },
		{gambar: "assets/images/chefsharmiza/Bubur Nasi.jpg", cafe: "Chef Shazmira ", nama: "Bubur Nasi", harga: 3.00 },
		{gambar: "assets/images/chefsharmiza/Laksa Penang.jpg", cafe: "Chef Shazmira ", nama: "Laksa Penang", harga: 3.50 },
		{gambar: "assets/images/chefsharmiza/Mee Kari.jpg", cafe: "Chef Shazmira ", nama: "Mee Kari", harga: 4.00 },
		{gambar: "assets/images/chefsharmiza/Mee Sup.jpg", cafe: "Chef Shazmira ", nama: "Mee Sup", harga: 4.00 },
		
		{gambar: "assets/images/chefsharmiza/Chicken Chop.jpg", cafe: "Chef Shazmira ", nama: "Chicken Chop", harga: 7.50 },
		{gambar: "assets/images/chefsharmiza/Fish Chips.jpg", cafe: "Chef Shazmira ", nama: "Fish and Chips", harga: 6.50 },
		{gambar: "assets/images/chefsharmiza/Fries Mayo.jpg", cafe: "Chef Shazmira ", nama: "Fries Mayo", harga: 3.50 },
		{gambar: "assets/images/chefsharmiza/Garlic Bread.jpg", cafe: "Chef Shazmira ", nama: "Garlic Bread", harga: 1.00 },
		{gambar: "assets/images/chefsharmiza/Lamb Chops.jpg", cafe: "Chef Shazmira ", nama: "Lamb Chops", harga: 10.00 },
		
		{gambar: "assets/images/chefsharmiza/Mushroom Soup.jpg", cafe: "Chef Shazmira ", nama: "Mushroom Soup", harga: 3.00 },
		{gambar: "assets/images/chefsharmiza/Spaghetti Bolognese.png", cafe: "Chef Shazmira ", nama: "Spaghetti Bolognese", harga: 6.00 },
		{gambar: "assets/images/chefsharmiza/Spaghetti Carbonara.jpg", cafe: "Chef Shazmira ", nama: "Spaghetti Carbonara", harga: 6.00 },
		{gambar: "assets/images/chefsharmiza/Spaghetti Seafood Olio.jpg", cafe: "Chef Shazmira ", nama: "Spaghetti Seafood Olio", harga: 5.50 },
		
		{gambar: "assets/images/obreak/nugget.png", cafe: "Obreak Resources", nama: "Nugget", harga: 3.50 },
		{gambar: "assets/images/obreak/fries.jpg", cafe: "Obreak Resources", nama: "Fries", harga: 2.50 },
		{gambar: "assets/images/obreak/burger.jpg", cafe: "Obreak Resources", nama: "Burger", harga: 3.00 },
		{gambar: "assets/images/obreak/wedges.png", cafe: "Obreak Resources", nama: "Wedges", harga: 4.80 },
		{gambar: "assets/images/obreak/waffle.png", cafe: "Obreak Resources", nama: "Waffle", harga: 3.00 },
		
		{gambar: "assets/images/woodydolly/black pepper meatball mushroom.jpg", cafe: "The Woodydolly", nama: "Black pepper Meatball Mushroom", harga: 4.00 },
		{gambar: "assets/images/woodydolly/baked beef pasta.jpg", cafe: "The Woodydolly", nama: "Baked Beef Pasta", harga: 4.50 },
		{gambar: "assets/images/woodydolly/baked creamy pasta.jpg", cafe: "The Woodydolly", nama: "Baked Creamy Chicken", harga: 4.50 },
		{gambar: "assets/images/woodydolly/beef lasagna.jpeg", cafe: "The Woodydolly", nama: "Beef / Chicken Lasagna ", harga: 6.00 },
		
		{gambar: "assets/images/bayleaf/donut.jpg", cafe: "Bay Leaf", nama: "Donat Gula", harga: 1.00 },
		{gambar: "assets/images/bayleaf/pau goreng.jpg", cafe: "Bay Leaf", nama: "Pau Goreng", harga: 1.00 },
		{gambar: "assets/images/bayleaf/mini burger.jpg", cafe: "Bay Leaf", nama: "Mini Burger", harga: 1.00 },
		{gambar: "assets/images/bayleaf/popia.jpg", cafe: "Bay Leaf", nama: "Popia", harga: 1.00 },
		{gambar: "assets/images/bayleaf/kuih lapis.jpg", cafe: "Bay Leaf", nama: "Kuih Lapis", harga: 1.00 },
		{gambar: "assets/images/bayleaf/seri muka.jpg", cafe: "Bay Leaf", nama: "Seri Muka", harga: 1.00 },
		{gambar: "assets/images/bayleaf/kuih bakar.jpg", cafe: "Bay Leaf", nama: "Kuih Bakar", harga: 1.00 },
		
		{gambar: "assets/images/woodydolly/tiramisu.jpg", cafe: "The Woodydolly", nama: "Tiramisu", harga: 3.50 },
		{gambar: "assets/images/woodydolly/oreo.jpg", cafe: "The Woodydolly", nama: "Oreo Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/pandan.png", cafe: "The Woodydolly", nama: "Pandan Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/marble.jpg", cafe: "The Woodydolly", nama: "Marble Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/blueberry.jpg", cafe: "The Woodydolly", nama: "Blueberry Cheese Cake", harga: 3.50 },
		
		{gambar: "assets/images/woodydolly/durian.jpg", cafe: "The Woodydolly", nama: "Durian Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/nutella.jpg", cafe: "The Woodydolly", nama: "Nutella Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/greentea.jpg", cafe: "The Woodydolly", nama: "Green Tea Cheese Cake", harga: 3.50 },
		{gambar: "assets/images/woodydolly/mangos.jpg", cafe: "The Woodydolly", nama: "Mango Cheese Cake", harga: 8.00 },
		
		{gambar: "assets/images/sehain/abc.jpg", cafe: "Sehain Dessert", nama: "ABC", harga: 2.99 },
		
		{gambar: "assets/images/bayleaf/teh.jpg", cafe: "Bay Leaf", nama: "Air Teh", harga: 1.30 },
		{gambar: "assets/images/bayleaf/nescafe.jpg", cafe: "Bay Leaf", nama: "Air Nescafe", harga: 1.30 },
		{gambar: "assets/images/bayleaf/milo.jpg", cafe: "Bay Leaf", nama: "Air Milo", harga: 1.30 },
		{gambar: "assets/images/bayleaf/air jagung.jpg", cafe: "Bay Leaf", nama: "Air Jagung", harga: 1.30 },
		{gambar: "assets/images/bayleaf/teh o.jpg", cafe: "Bay Leaf", nama: "Air Teh o", harga: 1.00 },
		
		{gambar: "assets/images/bayleaf/sirap.jpg", cafe: "Bay Leaf", nama: "Air Sirap", harga: 1.00 },
		{gambar: "assets/images/bayleaf/air anggur.jpg", cafe: "Bay Leaf", nama: "Air Anggur", harga: 1.00 },
		{gambar: "assets/images/bayleaf/teh bunga.jpg", cafe: "Bay Leaf", nama: "Teh Bunga", harga: 1.00 },
		{gambar: "assets/images/bayleaf/air barli.jpg", cafe: "Bay Leaf", nama: "Air Barli ", harga: 1.00 },
		{gambar: "assets/images/bayleaf/air mangga.jpg", cafe: "Bay Leaf", nama: "Air Mangga", harga: 1.00 },	
		{gambar: "assets/images/bayleaf/air oren.jpg", cafe: "Bay Leaf", nama: "Air Oren ", harga: 1.00 },
		
		{gambar: "assets/images/pepper/teh.jpg", cafe: "Papper", nama: "Air Teh", harga: 1.30 },
		{gambar: "assets/images/pepper/nescafe.jpg", cafe: "Papper", nama: "Air Nescafe", harga: 1.30 },
		{gambar: "assets/images/pepper/milo.jpg", cafe: "Papper", nama: "Air Milo", harga: 1.30 },
		{gambar: "assets/images/pepper/sirap limau.jpg", cafe: "Papper", nama: "Sirap Limau", harga: 1.30 },
		{gambar: "assets/images/pepper/teh o.jpg", cafe: "Papper", nama: "Air Teh o", harga: 1.00 },
		
		{gambar: "assets/images/pepper/sirap.jpg", cafe: "Papper", nama: "Air Sirap", harga: 1.00 },
		{gambar: "assets/images/pepper/air anggur.jpg", cafe: "Papper", nama: "Air Anggur", harga: 1.00 },
		{gambar: "assets/images/pepper/sunquick.jpg", cafe: "Papper", nama: "Air Sanquick", harga: 1.00 },
		{gambar: "assets/images/pepper/sarsi.jpg", cafe: "Papper", nama: "Air Sarsi", harga: 1.00 },
		
		{gambar: "assets/images/woodydolly/mango.jpg", cafe: "The Woodydolly", nama: "Soda Lemonade Mango", harga: 3.00 },
		{gambar: "assets/images/woodydolly/kiwi.jpg", cafe: "The Woodydolly", nama: "Soda Lemonade Kiwi", harga: 3.00 },
		{gambar: "assets/images/woodydolly/blackcurrent.jpg", cafe: "The Woodydolly", nama: "Soda Lemonade Blackcurrent", harga: 3.00 },
		{gambar: "assets/images/woodydolly/strawberry.jpg", cafe: "The Woodydolly", nama: "Soda Lemonade Strawberry", harga: 3.00 },
		{gambar: "assets/images/woodydolly/hotcup.jpg", cafe: "The Woodydolly", nama: "Hot cup Coffee", harga: 2.00 },
		{gambar: "assets/images/woodydolly/shake.jpg", cafe: "The Woodydolly", nama: "Milkshake", harga: 5.00 },
		
		{gambar: "assets/images/sehain/coffee.jpg", cafe: "Sehain Dessert", nama: "Kopi Thailand", harga: 3.50 },

		{gambar: "assets/images/obreak/juice.jpg", cafe: "Obreak Resources", nama: "Fruit Juice", harga: 3.00 },
		{gambar: "assets/images/obreak/milkshake.jpg", cafe: "Obreak Resources", nama: "Milkshake", harga: 3.00 },

	];
		
		
		//onclick button submit
		$("#btnSubmit").click(function (){
			//mula2 double check, user masukkan tak budget value, dgn type of meal
			//cara nak check, opkos kene ambik value, so guna .val()
			var type = $("#type").val();
			var budget = $("#budget").val();
			
			if(type == "" && budget == ""){
				alert("Please enter budget and type of meal");
			}else if(budget == ""){
				alert("Please enter budget");
			}else if(type == ""){
				alert("Please enter type of meal");
			}else{//dua2 tu ada value, betul
				
				switch(type){
					case "malay":
						appendResult(malay, budget);
						break;
					
					case "western":
						appendResult(western, budget);
						break;
					
					case "dessert":
						appendResult(dessert, budget);
						break;
					
					case "drink":
						appendResult(drink, budget);
						break;
					
					case "semua":
						appendResult(semua, budget);
						break;
					
				}
				
				
			}
		});
		
		function appendResult(arraylist, budget){
			var result = "";
			var price = budget;
			$("#resultbudget").html("");//resetting result
			
			$(arraylist).each(function (i){
			
				if(arraylist[i].harga <= budget){//kalau betul, baru kita ambik dia punya info makanan tu
					result += "<div class='gambar-col col-xs-6 col-lg-3'>";
					result += "<div class='container'>";
					result += "<div class='card cart-block'>";
					result += "<div class='card-img'>";
					result += "<img src='" + arraylist[i].gambar + "' class='card-img-top'>";
					result += "</div>";
					result += "<div class='card-block'>";
					result += "<p class='card-text'><strong>Cafe : "+ arraylist[i].cafe +" <br>Name : "+ arraylist[i].nama +" <br>Price : RM"+ arraylist[i].harga +"</strong></p>";
					result += "</div></div></div></div>";
					
				}
			
			});
			
			$("#resultbudget").append(result);//tampalkan dalam div yg id dia id="resultbudget"
			//alert(result);
		}
	});