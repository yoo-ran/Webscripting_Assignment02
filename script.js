    // 
    const image_arr = ["image01.jpg","image02.jpg","image03.jpg","image04.jpg","image05.jpg"]
	var img_array;
	let current_index = 0;

		const first_load = () => { 
			// TODO: set the main image to the first image in the array (index 0)
			// TODO: set the thumbnail images

			document.querySelector("#main-image").src = `images/${image_arr[0]}`
			image_arr.forEach((img) => {
				let img_tag = document.createElement("img")
				img_tag.src = `images/${img}`
                img_tag.className = "thumbnails"
				img_tag.style.opacity = "0.5"
				let thumbnail_image = document.querySelector("#thumbnail-area")
				thumbnail_image.append(img_tag)
			});	
			let images =  document.querySelectorAll(".thumbnails");
			img_array = document.querySelectorAll(".thumbnails");
            for(let i=0; i<images.length; i++){
                images[i].addEventListener("click",()=>{
                    set_main_image(i)
					set_thumbnail(i, images)
                })
				
            }
		}
	
		const set_main_image = (index) => {
			current_index = index
			document.querySelector("#main-image").src = `images/${image_arr[current_index]}`
		}

		const set_thumbnail = (index, arr) =>{
			for(let i=0; i<arr.length; i++){
				if (arr[i]==arr[index]) {
					arr[i].style.opacity ="1"
				}else{
					arr[i].style.opacity ="0.5"
				}
			}
		}

	
		const set_nav_first = () => {
			// TODO: navigate to the first image (this is the easy one since it's always index zero)
			current_index = 0
			set_main_image(current_index)
			set_thumbnail(current_index, img_array)
		}
	
		const set_nav_last = () => {
			current_index = image_arr.length -1
			set_main_image(current_index)
			set_thumbnail(current_index, img_array)
		}
	
		const set_nav_next = () => {
			current_index = (current_index >= image_arr.length -1)? current_index=0: current_index+1;
			set_main_image(current_index)
			set_thumbnail(current_index, img_array)


		}
	
		const set_nav_prev = () => {
			current_index = (current_index <=0)? image_arr.length -1: current_index-1;
			set_main_image(current_index);
			set_thumbnail(current_index, img_array)
		}	
	
		window.addEventListener("load", first_load);