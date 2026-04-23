;(function () {
	// DARK MODE TOGGLE
	const darkToggle = document.getElementById("darkToggle")
	const body = document.body
	const icon = darkToggle.querySelector("i")

	// Check local storage or default
	if (localStorage.getItem("theme") === "dark") {
		body.classList.add("dark")
		icon.classList.remove("fa-moon")
		icon.classList.add("fa-sun")
	}
	darkToggle.addEventListener("click", () => {
		body.classList.toggle("dark")
		if (body.classList.contains("dark")) {
			icon.classList.remove("fa-moon")
			icon.classList.add("fa-sun")
			localStorage.setItem("theme", "dark")
		} else {
			icon.classList.remove("fa-sun")
			icon.classList.add("fa-moon")
			localStorage.setItem("theme", "light")
		}
	})

	// MOBILE MENU
	const toggleBtn = document.getElementById("menuToggle")
	const navLinks = document.getElementById("navLinks")
	toggleBtn.addEventListener("click", () => {
		if (navLinks.style.display === "flex") {
			navLinks.style.display = "none"
		} else {
			navLinks.style.display = "flex"
			navLinks.style.flexDirection = "column"
			navLinks.style.position = "absolute"
			navLinks.style.top = "80px"
			navLinks.style.left = "0"
			navLinks.style.width = "100%"
			navLinks.style.background = body.classList.contains("dark")
				? "#1e1e2a"
				: "#fff"
			navLinks.style.padding = "20px"
			navLinks.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)"
			navLinks.style.zIndex = "99"
		}
	})

	// CLASS SCHEDULE DATA & FILTER
	const classes = [
		{
			time: "6:00 AM",
			name: "Morning Vinyasa",
			trainer: "Lena Chen",
			type: "yoga",
			level: "All",
			duration: "60 min",
		},
		{
			time: "7:30 AM",
			name: "HIIT Ignite",
			trainer: "Dante Hill",
			type: "hiit",
			level: "Intermediate",
			duration: "45 min",
		},
		{
			time: "9:00 AM",
			name: "Strength Circuit",
			trainer: "Marcus Reed",
			type: "strength",
			level: "Advanced",
			duration: "50 min",
		},
		{
			time: "12:00 PM",
			name: "Power Spin",
			trainer: "Marcus Reed",
			type: "spin",
			level: "All",
			duration: "45 min",
		},
		{
			time: "5:30 PM",
			name: "Yin Yoga",
			trainer: "Lena Chen",
			type: "yoga",
			level: "Beginner",
			duration: "60 min",
		},
		{
			time: "6:30 PM",
			name: "Boxing Bootcamp",
			trainer: "Dante Hill",
			type: "hiit",
			level: "All",
			duration: "50 min",
		},
		{
			time: "7:30 PM",
			name: "Core & Conditioning",
			trainer: "Marcus Reed",
			type: "strength",
			level: "Intermediate",
			duration: "40 min",
		},
	]

	const grid = document.getElementById("scheduleGrid")
	function renderSchedule(filterType = "all") {
		const filtered =
			filterType === "all"
				? classes
				: classes.filter((c) => c.type === filterType)
		grid.innerHTML = filtered
			.map(
				(c) => `
          <div class="class-card">
            <div class="class-time">${c.time} (${c.duration})</div>
            <div class="class-name">${c.name}</div>
            <div class="class-trainer">with ${c.trainer}</div>
            <span class="badge">${c.level}</span>
            <div style="margin-top:16px;"><button class="btn" style="padding:10px 18px; font-size:0.9rem;" onclick="alert('Demo: booked ${c.name} with ${c.trainer}')">Book now</button></div>
          </div>
        `,
			)
			.join("")
	}
	renderSchedule()

	// Filter buttons
	const filterBtns = document.querySelectorAll(".filter-btn")
	filterBtns.forEach((btn) => {
		btn.addEventListener("click", function () {
			filterBtns.forEach((b) => b.classList.remove("active"))
			this.classList.add("active")
			const filter = this.dataset.filter
			renderSchedule(filter)
		})
	})

	// smooth scroll
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			const href = this.getAttribute("href")
			if (href === "#") return
			const target = document.querySelector(href)
			if (target) {
				e.preventDefault()
				target.scrollIntoView({ behavior: "smooth" })
				if (window.innerWidth <= 900) navLinks.style.display = "none"
			}
		})
	})

	// dummy membership signup
	document.querySelectorAll(".plan-card .btn").forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault()
			alert("✨ Membership signup demo — thanks for your interest!")
		})
	})
	// store buy
	document.querySelector(".blog-card .btn")?.addEventListener("click", (e) => {
		e.preventDefault()
		alert("🛒 Added to cart (demo)")
	})
})()
