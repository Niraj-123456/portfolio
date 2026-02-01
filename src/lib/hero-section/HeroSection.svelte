<script lang="ts">
	import { Download, ArrowDownRight, CircleCheck } from 'lucide-svelte';
</script>

<section id="home" class="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
	<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
		<!-- Text Content -->
		<div class="space-y-8 animate-fade-in-up">
			<div
				class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide border border-blue-100"
			>
				<span class="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
				Available for work
			</div>
			<h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
				Hi, I'm <br />
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
					>Niraj Lama</span
				>
			</h1>
			<p class="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed">
				A Software Engineer passionate about building responsive web apps and converting complex
				ideas into elegant, pixel-perfect reality.
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					href="#projects"
					class="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2"
				>
					View Work
					<ArrowDownRight />
				</a>
				<a
					href="/documents/Niraj_lama-Resume.pdf"
					download="Niraj-Lama.pdf"
					class="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
				>
					Download CV
					<Download />
				</a>
			</div>
		</div>

		<!-- Visual Mockup -->
		<div class="relative group perspective-1000">
			<div
				class="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity"
			></div>
			<div
				class="relative transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out"
			>
				<img
					src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"
					alt="Dashboard Mockup"
					class="rounded-xl shadow-2xl border-4 border-white/50 w-full object-cover h-[400px]"
				/>
				<!-- Floating Badge -->
				<div
					class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
				>
					<div class="bg-green-100 p-2 rounded-lg text-green-600">
						<CircleCheck />
					</div>
					<div>
						<div class="text-xs text-slate-400 font-semibold uppercase">Experience</div>
						<div class="text-lg font-bold text-slate-800">3+ Years</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
