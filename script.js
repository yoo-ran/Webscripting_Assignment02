	// Yooran Kim, A01377771, MDIA 2294: Assignment02

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
					// <img></img>
				let img_tag = document.createElement("img")
				// Assign src to the img tag
				// ${img} is the element of array image_file_arr, which is file name
					//<img src="images/image01.jpg"></img> ...
				img_tag.src = `images/${img}`
				// later I need img tag array to access each tag
				// to do that I will use qeurySelectotAll()
				// so I am giving class to the img tag so that I can select this img tag exactly
					// <img src="images/image01.jpg" class="thumbnails"></img> ...
                img_tag.className = "thumbnails"
				// Since the thumbnails are low opacity when window is loaded, I gave the img opacity
				// It's like a CSS
				// select element(img_tag), give style(.style), which is opacity(.opacity)
					// <img src="images/image01.jpg" class="thumbnails" style="opacity:0.5"></img> ...
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
				// whenever user clicked each thumbnail img, some fuctions will work
				// to set main image and change thumbnail image
                img_tag_arr[i].addEventListener("click",()=>{
					// when user click the thumbnail img
					// function set_main_image() will get i(index of image that user clicked) as a parameter
                    set_main_image(i)
					// function set_thumbnail() will get i as a parameter and the array of thumnail img tags
					set_thumbnail(i, img_tag_arr)
                })
            }
		}
	
		// function set_main_image
		// to change main image
		// the function got index from line 74 in fuction first_load()
		const set_main_image = (index) => {
			// the global variable, current_index store the vaue of index(parameter)
			// which is array index of thumbnail img that user clicked now
			current_index = index;
			// Now time to change the main image
			// select main image tag
			// 	call DOM(document), select the img(img#main-image)
			//  assign src to the img tag using .src
			//  image file path will be `images/${image_file_arr[current_index]}`
			// in the image file path, current_index is used to pick the image that user clicked
			document.querySelector("#main-image").src = `images/${image_file_arr[current_index]}`
		}

		// Funtion for changing thumbnail
		// functionset_thumbnail() got index number and array from function first_load()
		// index number is the number of thumbnail img tag array
		// arr is thumbnail img tag array
		const set_thumbnail = (index, arr) =>{
			// using for loop, I can access to each thumnail image
			for(let i=0; i<arr.length; i++){
				// amongst img tags in arr, if the img tag in arr is equal to img tag of arr[index]
				// then the img tag in arr is clicked by user
				// in that case, the opacity of image is 100%(=1)
				if (arr[i]==arr[index]) {
					arr[i].style.opacity ="1"
				// if the img tag in arr[i] is not equal to img tag of arr[index],
				//  it means user didn't click it
				//  so the images's opacity should be less that 100%
				// that's why I gave opacity as 50%(0.5)
				}else{
					arr[i].style.opacity ="0.5"
				}
			}
		}

		// When user click this button, first image will appear on main image, first image thumbnail will be 100% opacity
		const set_nav_first = () => {
			// since the first image index is 0 in array, we need to set current_index as 0
			current_index = 0;
			// to show first image on main image,
			// using function set_main_image(), put currrent_index in to parameter, then 0 will be value of parameter
			// and it shows first image on main image
			set_main_image(current_index)
			// Change thumbnail
			// in parameter, put current_index, and img_tag_arr
			// so I can reach to each img html tag and especially first one.
			// img_tag_arr is set on line 63, when I set the thumbstrip
			set_thumbnail(current_index, img_tag_arr)
		}
	
		// When user click this button, last image will appear on main image, then the last thumbnail image will be 100% opacity
		const set_nav_last = () => {
			// in terms of reusability, I used .length, 
			// 		cuz whatever we use different array, we don't need to count how many elements are in the array
			// .length can count how many elements are in the array, so count a number of elements first
			// last image index is a number of elements - 1, since the index starts from 0
			//  that's why I subtract 1 from image_file_arr.length
			current_index = image_file_arr.length - 1;
			// put new current_index in to function set_main_image()
			// so the main image can show the last image
			set_main_image(current_index);
			// also put current_inedx which means last one, and array
			// so the fucntion can know which thumbnail should be 100% opacity
			set_thumbnail(current_index, img_tag_arr);
		}
	
		// When user click this button, next image will appear on main image, then the next thumbnail image will have 100% opacity
		const set_nav_next = () => {
			// the next image index is current image index + 1, cuz it is next one
			// but the thing is when the next image reaches to last image, and when user click next button again, 
			// the next image should be the first image.
			//  to make it possible to do it, we need either if condition or ternary operator

			// if the current_index is bigger than last image index which means current_index reached to last image, it should become 0 which means first image index, to go to first image
			// if not, it means it didn't reach to last image yet, so it can go next. then, current_index becomes current_index + 1
			current_index = (current_index >= image_file_arr.length -1)? current_index=0: current_index+1;
			set_main_image(current_index)
			set_thumbnail(current_index, img_tag_arr)
		}

		// When user click this button, previous image will appear on main image, then the previous thumbnail image will have 100% opacity
		const set_nav_prev = () => {
			// when user click previous button, the current_index will become current_index-1, 
			// because the previous image index is before the current image index
			// however, when the current image reached to first one, the previous image should be last image
			// using ternary, if current_index is less than 0, meaning that it was already first image
			// the current_index should be last image index which is image_file_arr.length -1 ( a number of elements of array - 1)
			// if not, current_index becomes current_index-1 which means previous image
			current_index = (current_index <=0)? image_file_arr.length -1: current_index-1;
			set_main_image(current_index);
			set_thumbnail(current_index, img_tag_arr)
		}	
	
		// when the window is loaded, function first_load() will work;
		window.addEventListener("load", first_load);