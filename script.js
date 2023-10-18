    // 
    const image_arr = ["image01.jpg","image02.jpg","image03.jpg"]
	let current_index = 0;


		const first_load = () => { 
			// TODO: set the main image to the first image in the array (index 0)
			// TODO: set the thumbnail images

			document.querySelector("#main-image").src = `images/${image_arr[0]}`
			image_arr.forEach((img,index) => {
				let img_tag = document.createElement("img")
				img_tag.src = `images/${img}`
                img_tag.className = "thumbnails"
				let thumbnail_image = document.querySelector("#thumbnail-area")
				thumbnail_image.append(img_tag)
			});	

            let images =  document.querySelectorAll(".thumbnails")
            for(let i=0; i<images.length; i++){
                images[i].addEventListener("click",()=>{
                    set_main_image(i)
                })
            }
		}
	
		const set_main_image = (index) => {
			// TODO: set the main-image src image based on the passed parameter	    
			
			// update the thumbnails based on the current selection
			current_index = index
			document.querySelector("#main-image").src = `images/${image_arr[current_index]}`
		}

	
		const set_nav_first = () => {
			// TODO: navigate to the first image (this is the easy one since it's always index zero)
			current_index = 0
			set_main_image(current_index)
		}
	
		const set_nav_last = () => {
			// TODO: navigate to the last image (should work for any size array)
			current_index = image_arr.length -1
			set_main_image(current_index)
		}
	
		const set_nav_next = () => {
			current_index = (current_index >= image_arr.length -1)? current_index=0: current_index+1;
			set_main_image(current_index)
		}
	
		const set_nav_prev = () => {
			// TODO: move to the previous image, unless at the end in which case show the last image
			current_index = (current_index <=0)? image_arr.length -1: current_index-1;
			set_main_image(current_index)
		}	
	
		window.addEventListener("load", first_load);