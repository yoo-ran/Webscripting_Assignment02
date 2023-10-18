    // a comment block with your name, student no and the assignment name
	// Yooran Kim, A01377771, MDIA 2294: Assignment 2

	// Make constant variable to store the file's name of all images
	// I stored the file's name in array, so I can call each file, easiy using index
    const image_file_arr = ["image01.jpg","image02.jpg","image03.jpg","image04.jpg","image05.jpg"]
	// Declare global variable, so I can use this variable whenever or wherever i want, and I can change the value as well
	// Later I will store the all img tags in this variable
	var img_tag_arr;
	// declare and assign variable to use it and change the value
	let current_index = 0;

		// when the window is ready, this fuction will work
		// To set the main image, and thumbstrip
		const first_load = () => {
			// Set main image
			// call dom(document),  select img tag with ID"main-image"
			// .src => change or give the file path of image
			// assign string to src using ``, as i need to use array variable
			// since the main image should be first image, when window is loaded, give index 0
			// 		because array index starts from 0 which means first element
			document.querySelector("#main-image").src = `images/${image_file_arr[0]}`

			// I need to access each element of the image file name array (image_file_arr)
			// so I used foreach
			image_file_arr.forEach((img) => {
				// CREATE THUMBNAIL
				// Create img tag using createElement(), since in HTML, there are no img tag in div#Thumbnail-area
				// img_tag is new img tag
				// |	<img></img>
				let img_tag = document.createElement("img")
				// Assign src to the img tag
				// ${img} is the element of array image_file_arr, which is file name
				// |	<img src="images/image01.jpg"></img> ...
				img_tag.src = `images/${img}`
				// later I need img tag array to access each tag
				// to do that I will use qeurySelectotAll()
				// so I am giving class to the img tag so that I can select this img tag exactly
				// |	<img src="images/image01.jpg" class="thumbnails"></img> ...
                img_tag.className = "thumbnails"
				// Since the thumbnails are low opacity when window is loaded, I gave the img opacity
				// It's like a CSS
				// select element(img_tag), give style(.style), which is opacity(.opacity)
				// |	<img src="images/image01.jpg" class="thumbnails" style="opacity:0.5"></img> ...
				img_tag.style.opacity = "0.5"
				// Now I am putting all the img tags in the div#thumbnail-area
				// first, create variable to store div#thumbnail-area
				// call DOM(document), select div#thumbnail-area(querySelector())
				let thumbnail_image = document.querySelector("#thumbnail-area")
				// in div#thumbnail-area, add all img tags that I've created above
				// using append() method, it inserts img tags at the end of div#thumbnail-area
				// <div id="thumbnail-area">
				// 		<img src="images/image01.jpg" class="thumbnails" style="opacity:0.5"></img>
				// 		<img src="images/image02.jpg" class="thumbnails" style="opacity:0.5"></img>
				// 		...
				// 		<img src="images/image05.jpg" class="thumbnails" style="opacity:0.5"></img>
				// </div>	   
				thumbnail_image.append(img_tag)
			});	
			// Now, I need to access all the img tag, to set main image and change the thumbnails
			// Using querySelectorAll(), I can get the array of thumbnail img tags
			// call DOM(document), ask it to select all thumbnail img tags (.querySelectorAll(".thumbnails"))
			img_tag_arr = document.querySelectorAll(".thumbnails");
			// using for loop, I can access each img tag
			// i will be used to call index of array
			// i starts from 0 until before the length of img_tag_arr, and i will be increment one by one
			// in this case, i will be increased like  0,1,2,3,4
            for(let i=0; i<img_tag_arr.length; i++){
				// when user clicked each thumbnail img, some fuctions will work
                img_tag_arr[i].addEventListener("click",()=>{
                    set_main_image(i)
					set_thumbnail(i, img_tag_arr)
                })
				
            }
		}
	
		const set_main_image = (index) => {
			current_index = index
			document.querySelector("#main-image").src = `images/${image_file_arr[current_index]}`
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
			set_thumbnail(current_index, img_tag_arr)
		}
	
		const set_nav_last = () => {
			current_index = image_file_arr.length -1
			set_main_image(current_index)
			set_thumbnail(current_index, img_tag_arr)
		}
	
		const set_nav_next = () => {
			current_index = (current_index >= image_file_arr.length -1)? current_index=0: current_index+1;
			set_main_image(current_index)
			set_thumbnail(current_index, img_tag_arr)


		}
	
		const set_nav_prev = () => {
			current_index = (current_index <=0)? image_file_arr.length -1: current_index-1;
			set_main_image(current_index);
			set_thumbnail(current_index, img_tag_arr)
		}	
	
		window.addEventListener("load", first_load);