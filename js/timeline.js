/* ============================================
   BOYERTOWN HISTORY - JAVASCRIPT
   Handles modal population with event data
   ============================================ */

// --------------------------------------------
// EVENT DATA
// All 18 historical events with full details
// --------------------------------------------
const events = [
    {
        id: 1,
        year: "1720",
        title: "Colebrookdale Furnace Founded",
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
        imageAlt: "Historic iron furnace representation",
        description: "Colebrookdale Furnace was established on Iron Stone Creek, about half a mile east of present-day Boyertown, by James Lewis, Anthony Morris, Thomas Potts, and Thomas Rutter. Named after Abraham Darby's Coalbrook Dale Furnace in Shropshire, England, it became Pennsylvania's first cold blast furnace and the first pig-iron producing furnace in the colony. The furnace was powered by water and drew from the region's rich deposits of hematite and magnetic iron ore that were accessible using trench-mining techniques of the period."
    },
    {
        id: 2,
        year: "1720",
        title: "Early Settlement Begins",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
        imageAlt: "Rolling farmland representing early settlement",
        description: "The earliest recorded history of Boyertown dates to 1720, when John Salter became part owner of the Powell purchase. As German immigrants established themselves in the nearby Oley Valley, English settlers, particularly Thomas Rutter and the Potts family, were drawn to the land of the Lenape people due to the rich concentration of iron ore below its surface. Early settlers included Jonathan Rhoads, Henry Baer, the Shaner family, the Henry Boyers, and the Schaeffers. The area was known as Colebrookdale in these early days."
    },
    {
        id: 3,
        year: "1775-1783",
        title: "Revolutionary War Iron Production",
        image: "https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800&q=80",
        imageAlt: "Cannons representing Revolutionary War era",
        description: "Boyertown sits atop large reserves of iron ore and became one of the primary sources of the material for the colonies during the Revolutionary War. The iron was used to supply George Washington with weapon material including cannon, arms, ammunition, skelps for muskets, trenching tools, and bayonets. Almost to a man, the local ironmasters supported the war effort, and a large number became colonels in the Pennsylvania militia. This period marked both the zenith of the Schuylkill ironworks and the beginning of their eventual decline."
    },
    {
        id: 4,
        year: "1815",
        title: "Colebrookdale Iron Works Opens",
        image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
        imageAlt: "Industrial iron works",
        description: "The opening of the Colebrookdale Iron Works in 1815 brought renewed industrial growth to the area. While the original Colebrookdale Furnace had been blown out just before the American Revolution after consuming the nearby forest and exhausting its high-quality ore deposits, this new facility helped establish Boyertown as an important manufacturing hub for the region. The iron industry would continue to shape the town's economy and identity for decades to come."
    },
    {
        id: 5,
        year: "1828",
        title: "Boyertown Post Office Established",
        image: "https://images.unsplash.com/photo-1579705379832-6a58b37e674c?w=800&q=80",
        imageAlt: "Historic post office",
        description: "A post office called Boyertown has been in operation since 1828, marking an important milestone in the community's development. The establishment of a post office provided the growing settlement with a vital communication link to the outside world and helped solidify its identity as a distinct community. This was seven years before the community would be formally laid out in town lots in 1835."
    },
    {
        id: 6,
        year: "1864",
        title: "Castle Hall Cigar Company Founded",
        image: "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?w=800&q=80",
        imageAlt: "Vintage cigar manufacturing",
        description: "David S. Erb began making cigars in a small building across from the Union Church on West Philadelphia Avenue with just two employees. His business grew dramatically to more than 500 workers who produced 400,000 handmade Castle Hall cigars per month. By 1884, Boyertown had become a leading cigar manufacturing center, with at least five companies engaged in production and Boyertown cigars sold across the entire country. A cigar box factory also operated to support the industry. This cigar dominance lasted until 1910, when machines took over manufacturing."
    },
    {
        id: 7,
        year: "1866",
        title: "Boyertown Incorporated as Borough",
        image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80",
        imageAlt: "Historic town hall",
        description: "After two previous attempts to incorporate (the first in 1851), Boyertown was finally incorporated as a Borough in April 1866. The town was named after some of its earliest and most prominent settlers - Henry Boyer and his family. Henry Boyer had purchased a farm on the Latshaw property near the center of town and built a hotel at the intersection of the Philadelphia and Reading roads (today the Boyertown Inn). He and his brother Daniel became owners of most of the land in the area."
    },
    {
        id: 8,
        year: "1869",
        title: "Colebrookdale Railroad Opens",
        image: "https://images.unsplash.com/photo-1527684651079-95b9f0e8c0a9?w=800&q=80",
        imageAlt: "Historic steam railroad",
        description: "Incorporated in 1865, the Colebrookdale Railroad began service in September 1869, running from the Philadelphia and Reading Railroad line at Pottstown through Pine Forge, Colebrookdale, and Boyertown to Barto. The fare was only 30 cents! This rail spur connected Boyertown to major cities faster than ever before, transforming the local economy and enabling the growth of manufacturing industries. The railroad made it possible to ship goods efficiently and brought visitors and new residents to the growing town."
    },
    {
        id: 9,
        year: "1891",
        title: "Carl Spaatz Born in Boyertown",
        image: "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=800&q=80",
        imageAlt: "Vintage military aircraft",
        description: "Carl Andrew Spatz (later Spaatz) was born on June 28, 1891, in Boyertown to Anna Amelia Muntz and Charles Busch Spatz. He would become the leading U.S. combat air commander in World War II and the first Chief of Staff of the independent U.S. Air Force. He added an extra 'a' to his name in 1937 to encourage the correct pronunciation 'Spots.' His accomplishments include commanding the Eighth Air Force in Europe, leading the Allied invasion of North Africa air operations, and setting a world record in 1929 for keeping an aircraft aloft for over 150 hours."
    },
    {
        id: 10,
        year: "1893",
        title: "Boyertown Burial Casket Company Founded",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        imageAlt: "Historic factory building",
        description: "In the winter of 1893, difficulty in obtaining coffins inspired C.A. Mory and Associates to establish the Boyertown Burial Casket Company. It grew to become one of the largest casket manufacturers in the world and was among the earliest companies traded on the New York and Philadelphia stock exchanges. The company crafted caskets for notable figures including Robert F. Kennedy, Liberace, Marilyn Monroe, and Harry Houdini. A solid bronze casket was even shipped to China for President Sun Yat Sen in 1925. Boyertown became known as the 'Casket Capital of the World.'"
    },
    {
        id: 11,
        year: "1908",
        title: "Rhoads Opera House Fire",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        imageAlt: "Historic theater memorial",
        description: "On January 13, 1908, the Rhoads Opera House caught fire during a performance of 'The Scottish Reformation,' a church-sponsored play. An inexperienced projectionist turned the wrong knob, emitting gas, and when someone knocked over a kerosene lamp, the stage erupted in flames. Located on the second floor with only a single narrow staircase and one locked door, escape was nearly impossible. 170 people died - one-tenth of the town's population - and 75 were seriously injured. Three morgues were set up, and approximately 15,000 people attended funerals on a single day. This tragedy led to Pennsylvania's first fire safety laws in 1909, requiring outward-opening doors, panic bars, and marked exits."
    },
    {
        id: 12,
        year: "1912",
        title: "First Halloween Parade",
        image: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=800&q=80",
        imageAlt: "Halloween parade celebration",
        description: "The Boyertown Halloween Parade began in 1912, becoming a cherished, not-to-be-missed community tradition that has endured for over a century. Now organized by the Boyertown Area Historical Society, the parade continues to bring the community together each October with spooks, haunts, and family fun. After the Levan family and Brandon Yoder stepped down from organizing the parade, local historian and businesswoman Adriane Zapien helped lead its continuation. The parade remains an integral part of Boyertown's community identity."
    },
    {
        id: 13,
        year: "1912",
        title: "State Theatre Opens",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80",
        imageAlt: "Historic theater facade",
        description: "The State Theatre of Boyertown opened its doors in 1912, the same year the Halloween Parade tradition began. This historic theater has served as a community landmark for over a century, celebrating its 100th anniversary in 2012. Throughout the decades, it has provided entertainment, hosted community events, and served as a gathering place for generations of Boyertown residents. The theater represents the cultural vitality that has long characterized this Pennsylvania borough."
    },
    {
        id: 14,
        year: "1926",
        title: "Boyertown Auto Body Works Established",
        image: "https://images.unsplash.com/photo-1558618047-f4c511eca71c?w=800&q=80",
        imageAlt: "Vintage truck manufacturing",
        description: "The Boyertown Auto Body Works was established in 1926, continuing the town's strong manufacturing tradition. The company produced commercial and government truck bodies and would operate until 1990. During World War II, the company provided the United States Marine Corps with ambulances and trailers, earning them the prestigious Army-Navy E Award for outstanding production. This recognition highlighted Boyertown's contribution to the war effort and the quality of its industrial output."
    },
    {
        id: 15,
        year: "1941-1945",
        title: "World War II Contributions",
        image: "https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?w=800&q=80",
        imageAlt: "World War II era military",
        description: "During World War II, Boyertown's industries rallied to support the war effort. The Boyertown Auto Body Works provided the United States Marine Corps with ambulances and trailers, earning the prestigious Army-Navy E Award for outstanding production. Meanwhile, native son Carl Spaatz rose to become the leading U.S. combat air commander in Europe, commanding the Eighth Air Force and overseeing the strategic air offensive. His leadership helped secure Allied victory, and he would later become the first Chief of Staff of the independent U.S. Air Force when it was established in 1947."
    },
    {
        id: 16,
        year: "1988",
        title: "Boyertown Burial Casket Company Closes",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        imageAlt: "Abandoned industrial building",
        description: "On October 21, 1988, the famed Boyertown Burial Casket Company closed its doors after the company's sale in 1987. At its peak in the 1960s and 70s, the company had been the second-largest casket maker in the world, employing more than 1,000 people and producing more than 60,000 caskets per year. The factory was eventually demolished, but a historical marker stands at the former site today. The Boyertown Burial Casket Company is now a permanent exhibit at the Boyertown Area Historical Society, preserving the memory of this remarkable chapter in the town's industrial history."
    },
    {
        id: 17,
        year: "1990",
        title: "Boyertown Auto Body Works Closes",
        image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
        imageAlt: "Historic factory closing",
        description: "The Boyertown Auto Body Works closed in 1990 after 64 years of operation. The company had been a cornerstone of Boyertown's manufacturing economy, producing commercial and government truck bodies and earning recognition for its World War II contributions. Its closure marked the end of an era for Boyertown's industrial heritage, which had begun with iron production in 1720 and evolved through cigar manufacturing, casket production, and vehicle body manufacturing. The town would transition toward a more diversified economy while preserving its rich manufacturing legacy."
    },
    {
        id: 18,
        year: "2021",
        title: "General Carl Spaatz Museum Opens",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
        imageAlt: "Military aviation museum",
        description: "The General Carl Spaatz National USAAF Museum opened on October 2, 2021, on General Spaatz Avenue in Boyertown. The museum honors General Carl Spaatz, who grew up in Boyertown and became one of the most important military leaders in American history. The museum preserves the legacy of the man who commanded air forces in both the European and Pacific theaters during World War II and became the first Chief of Staff of the U.S. Air Force. A section of Pennsylvania Route 562 was also named the General Carl A. Spaatz Memorial Highway in his honor in 2018."
    }
];
const modalImage = document.getElementById('modalImage');
const modalYear = document.getElementById('modalYear');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const eventModal = document.getElementById('eventModal');
eventModal.addEventListener('show.bs.modal', function (event) {
    const triggerElement = event.relatedTarget;
    const eventId = parseInt(triggerElement.getAttribute('data-event'));
    const eventData = events.find(e => e.id === eventId);
    if (eventData) {
        modalImage.src = eventData.image;
        modalImage.alt = eventData.imageAlt;
        modalYear.textContent = eventData.year;
        modalTitle.textContent = eventData.title;
        modalDescription.textContent = eventData.description;
    }
});