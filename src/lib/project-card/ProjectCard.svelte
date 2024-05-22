<div class="w-96 h-[425px] overflow-hidden rounded-md relative">
	<img
		src="images/projects/foodapp.png"
		alt="project1"
		class="w-full h-full object-cover object-center"
	/>
	<div
		class="absolute top-0 left-0 w-full h-full flex flex-col justify-center z-10 items-center p-2 opacity-0 transition-opacity duration-700 cursor-pointer hover:opacity-100 bg__img__layer"
	>
		<h2 class="text-2xl font-bold">Food App</h2>
		<p class="text-white text-center mt-4 leading-6 tracking-wide">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique est, eos rerum in sunt
			commodi nostrum, asperiores molestiae nobis libero vitae provident. Natus aliquam dolorum
			quidem cum iusto excepturi dolores!
		</p>
	</div>
</div>

<style>
	.bg__img__layer::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.6);
		z-index: -1;
	}
</style>
