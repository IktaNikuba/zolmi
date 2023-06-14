

			/* header */
			let openCanvas = document.querySelector(".navbar__toggler");
			let menuCanvas = document.querySelector(".navbar__canvas");
			let bodyHidden = document.querySelector(".body");
			let togglerIcon = document.querySelector(".toggler__icon")

			openCanvas.addEventListener("click" , () => {
				bodyHidden.classList.toggle("body--hidden");
				menuCanvas.classList.toggle("show");
				togglerIcon.classList.toggle("toggler--active")
			});

			/* navbar__dropdown */
			let submenu = function() {

				if (window.innerWidth <= 992) {
					let dropdown = document.querySelectorAll(".dropdown__toggler");

					function deleteActive(current = null, event) {
						let parents = [];
						if (current) {
							let currentParent = current.parentNode;
							while (currentParent) {
								if (currentParent.classList.contains("navbar__nav")) break;
								if (currentParent.classList.contains("dropdown__menu")) parents.push(currentParent);
								currentParent = currentParent.parentNode;
							};

							let activeMenu = document.querySelectorAll(".menu--active");
							activeMenu.forEach(function(item) {
								if (!parents.includes(item) || item === current) item.classList.remove("menu--active");
							});
						};
					};

					dropdown.forEach((item) => {
						item.addEventListener("click", (event) => {
							deleteActive(event.currentTarget.nextElementSibling, event);
							event.currentTarget.nextElementSibling.classList.add("menu--active");
						});
					});

	                document.querySelector(".navbar__canvas").addEventListener( 'click', (event) => {
		                let checkСlickInMenu = Array.from(event.composedPath(), (elem) => elem.className).includes("dropdown__toggler");
		                if ( !checkСlickInMenu ) {
		                	dropdown.forEach((item) => item.nextElementSibling.classList.remove("menu--active"));
		            	};
		        	});
				};
			};
			submenu();

			/*function toggleSubmenu() {
				const dropdowns = document.querySelectorAll('.dropdown__toggler');

				function closeActiveMenu(current = null) {
					const parents = [];
					if (current) {
						let currentParent = current.parentNode;
						while (currentParent) {
							if (currentParent.classList.contains('navbar__nav')) break;
							if (currentParent.classList.contains('dropdown__menu')) parents.push(currentParent);
							currentParent = currentParent.parentNode;
						}

						const activeMenus = document.querySelectorAll('.menu--active');
						activeMenus.forEach((menu) => {
							if (!parents.includes(menu) || menu === current) {
								menu.classList.remove('menu--active');
							}
						});
					}
				}

				function toggleMenu(event) {
					const menu = event.currentTarget.nextElementSibling;
					if (menu.classList.contains('menu--active')) {
						menu.classList.remove('menu--active');
					} else {
						closeActiveMenu(menu);
						menu.classList.add('menu--active');
					}
				}

				dropdowns.forEach((dropdown) => {
					dropdown.addEventListener('click', toggleMenu);
				});

				document.querySelector('.navbar__canvas').addEventListener('click', (event) => {
					const checkClickInMenu = Array.from(event.composedPath(), (elem) => elem.className).includes('dropdown__toggler');
					if (!checkClickInMenu) {
						closeActiveMenu();
					}
				});
			}

			toggleSubmenu();*/



			/* modal */
			let modalLang = document.querySelector('.language');

			document.querySelector('.navbar__lang').onclick = function() {
			    modalLang.showModal();
			};

			document.querySelector('.navbar__lang--mobile').onclick = function() {
			    modalLang.showModal();
			};

			document.querySelector('.closeDialog').onclick = function() {
			    modalLang.close();
			};
