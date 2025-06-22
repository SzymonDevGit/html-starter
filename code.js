const quotes = [
	"You're literally perfect to me",
	"I'm so lucky to have you baybee",
	"You are perfect tits",
	"VERY. SO BEAUTIFUL.",
	"You're so gorgeous",
	"My love continues to grow through the lows and highs of life,through the changes,through our phases.And I know it’s only gonna keep growing.",
	"❤️❤️❤️",
	"Baba",
	"Baby",
	"You're very pretty babby",
	"You're the prettiest babby",
	"I always love seeing you baby",
	"Queen",
	"This one is mine",
	"I lob u too",
	"I love you tooo ❤️❤️❤️",
	"My baybee",
	"GOOD NIGHTY MY CUTIE BABY ❤️❤️❤️❤️❤️",
	"I'm gonna start making a website",
	"❤️❤️❤️❤️❤️",
	"I love you baby",
	"I love you very much bebe",
	"I love you so much baby",
	"You're the most beautiful girl I've ever seen",
	"You're my dream girl",
	"Everything I ever wanted",
	"You make me feel lucky every day",
	"You’re all I think about",
	"You make my life brighter",
	"I love your laugh",
	"You’re cute when you're mad",
	"I can't get enough of you",
	"You’re the best thing that's happened to me",
	"I would marry you right now if I could",
	"You’re my sunshine",
	"You mean everything to me",
	"You’re beautiful inside and out",
	"You make me a better man",
	"Being with you feels like home",
	"You’re so smart",
	"I love how your mind works",
	"You’re adorable",
	"Everything you do is cute",
	"I fall more in love with you every day",
	"You’re my peace",
	"You’re everything I never knew I needed",
	"I wanna be with you forever",
	"I still can’t believe you’re mine",
	"You're my whole world",
	"You're my everything",
	"I’d cross galaxies for you",
	"I’m obsessed with you",
	"You make my heart race",
	"I’m proud of you",
	"I admire you so much",
	"You're so talented",
	"You impress me every day",
	"I love your voice",
	"You make even silence feel warm",
	"Your eyes are mesmerizing",
	"You're my favourite person",
	"You’re my person",
	"I crave your presence",
	"You complete me",
	"You’re all I want",
	"You're the reason I smile",
	"You're my muse",
	"You're magical",
	"I feel lucky every second you're with me",
	"You're my best friend and my lover",
	"I love your weirdness",
	"You make life exciting",
	"You’re my cozy place",
	"I want to grow old with you",
	"I'd choose you in every lifetime",
	"You're incomparable",
	"You're art",
	"You shine",
	"You light up my world",
	"You’re worth everything",
	"I’ll love you through anything",
	"You make the bad days bearable",
	"I’ll never stop choosing you",
	"You’re my angel",
	"You're precious",
	"I’m lucky you exist",
	"You matter so much to me",
	"You’re my heart",
	"You’re my forever",
	"I love you most"
];

function showRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote-display").textContent = quote;
}

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll('.reveal-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(item => {
    observer.observe(item);
  });
});

  function updateTimer() {
    const startDate = new Date('2024-12-05T22:00:00'); // 5th Dec 2024, 10:00 PM
    const now = new Date();

    const diff = now - startDate; // difference in milliseconds

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30.44); // Approximate month
    const years = Math.floor(months / 12);

    // Format the output
    const timeString = `${months % 12} month${months % 12 !== 1 ? 's' : ''}, ` +
                       `${days % 30} day${days % 30 !== 1 ? 's' : ''}, ` +
                       `${hours} hour${hours !== 1 ? 's' : ''}, ` +
                       `${minutes} minute${minutes !== 1 ? 's' : ''}, ` +
                       `${seconds} second${seconds !== 1 ? 's' : ''}`;

    document.getElementById('relationship-timer').textContent = timeString;
  }

  // Update every second
  setInterval(updateTimer, 1000);
  updateTimer(); // Initial call