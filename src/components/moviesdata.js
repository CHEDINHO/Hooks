const moviesData = [
    {
      title: 'kuruluş osman',
      description: 'Kuruluş: Osman" is set in the late 13th and early 14th centuries and chronicles the life of Osman I, who was the leader of the Kayı tribe and the founder of the Ottoman Empire. The series explores his journey from being a tribal leader to establishing one of the most powerful empires in history.',
      posterURL: ' https://ahbmedya.com/wp-content/uploads/2024/01/0x0-1695908450163.jpg',
      rating: 9.8
    },
    {
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
      posterURL: 'https://images.bauerhosting.com/legacy/empire-tmdb/films/603/images/7u3pxc0K1wx32IleAkLv78MKgrw.jpg?ar=16:9&fit=crop&crop=top',
      rating: 8.7
    },
    {
      title: 'Alparslan: Büyük Selçuklu',
      description: 'Alparslan: Büyük Selçuklu" depicts the life of Sultan Alparslan, who played a significant role in the establishment and expansion of the Seljuk Empire. The series is set in the 11th century and explores the political, military, and social aspects of the Seljuk Empire during his reign.',
      posterURL: 'https://i.ytimg.com/vi/1L6WHxYLacM/maxresdefault.jpg',
      rating: 10
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZnDqYzl-5fcbFIj8uvgaBewZi5-WnTtvrA&s',
      rating: 9.0
    },
    {
      title: 'Game Of Thrones',
      description: 'Game of Thrones is a complex tale set in the fictional continents of Westeros and Essos, where noble families vie for control of the Iron Throne and dominance over the Seven Kingdoms.',
      posterURL: 'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/video-stills/season-01/game-of-thrones-season-1-episode-1-full-stitched-607175_PRO35_10-1920.jpg',
      rating: 7
    },
    {
      title: 'Vikings',
      description: '"Vikings" is a historical drama television series that aired from 2013 to 2020, created by Michael Hirst. The show is inspired by the sagas of Viking Ragnar Lothbrok, one of the most famous Norse heroes, and explores the legendary Viking age.',
      posterURL: 'https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/smart/creativemedia-image.canalplus.pro/content/0001/33/35a117684c43f8711cb8be1a09f9789f308c67a1.jpeg',
      rating: 10
    },

    {
      title: 'The Last Kingdom',
      description: 'The Last Kingdom is a historical drama television series based on Bernard Cornwells The Saxon Stories novels. The show originally aired on BBC Two and later on Netflix, spanning five seasons from 2015 to 2022. It is set during the Viking Age and focuses on the turbulent period of early medieval England.',
      posterURL: 'https://i.ytimg.com/vi/WxPApTGWwas/maxresdefault.jpg',
      rating: 8
    },

    {
      title: 'Diriliş Ertuğrul',
      description: '"Diriliş: Ertuğrul" (Resurrection: Ertugrul) is a Turkish historical drama television series that first aired in 2014 and concluded in 2019. Created by Mehmet Bozdağ and produced by the Turkish company TRX, the show is set in the 13th century and focuses on the life of Ertugrul Bey, the father of Osman I, who founded the Ottoman Empire.',
      posterURL: 'https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Ffanart%2Foriginal%2F5be818f67da40.jpg&w=3840&q=75',
      rating: 10
    },

    {
      title: 'Breaking Bad',
      description: 'Breaking Bad is a critically acclaimed American television series created by Vince Gilligan. It aired from 2008 to 2013 spanning five seasons The show is renowned for its intense storytelling complex characters and moral ambiguity',
      posterURL: 'https://resizing.flixster.com/syMtdhQFumCBBs4tUtDXcMr6Z5U=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8696131_b_h9_aa.jpg',
      rating: 10
    },

    {
      title: 'The Chronicles Of Narnia',
      description: 'The Chronicles of Narnia is a classic fantasy series by C.S. Lewis. The seven books are set in the magical land of Narnia a world of talking animals mythical creatures.',
      posterURL: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BC472A232D801D8230AAD8EED34AF6F6BFA30B4913DD016C7A618F4FA1966725/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp',
      rating: 10
    },
   
    {
      title: 'It',
      description: 'is a horror adaptation of Stephen Kings 1986 novel of the same name Directed by Andy Muschietti the film is set in the 1980s in the fictional town of Derry Maine and follows a group of children who come together to confront a malevolent entity that takes the form of a clown named Pennywise.',
      posterURL: 'https://images.mubicdn.net/images/film/156838/cache-165281-1506888590/image-w1280.jpg',
      rating: 7
    },
    

    
    {
      title: 'Annabelle',
      description: 'Annabelle is a 2014 horror film directed by John R. Leonetti and is a spin-off of The Conjuring franchise. It explores the backstory of the titular doll, which is a central element in the larger universe of The Conjuring films.',
      posterURL: 'https://m.media-amazon.com/images/S/pv-target-images/d31cadb408b0c2e709c9ad787998eeca3d630e745b4a3a5d2f72962e59463f6d._SX1080_FMjpg_.jpg',
      rating: 6
    },
    {
      title: 'Troy',
      description: ' "Troy," released in 2004, is a historical epic directed by Wolfgang Petersen. It stars Brad Pitt as Achilles, Eric Bana as Hector, and Orlando Bloom as Paris. The film is loosely based on Homers The Iliad and dramatizes the events leading up to and including the Trojan War.',
      posterURL: 'https://m.media-amazon.com/images/S/pv-target-images/5998bc94d172a9f445e29f3149028f9a2b0b48fd2cdb138f5e5f98eb2693bb7c._SX1080_FMjpg_.jpg',
      rating: 9
    },

    {
      title: 'The Kingdom Of Heaven',
      description: 'Kingdom of Heaven is a 2005 historical epic directed by Ridley Scott. The film stars Orlando Bloom as Balian of Ibelin, a blacksmith who becomes a knight and plays a significant role in the events surrounding the Crusades.',
      posterURL: 'https://images.bauerhosting.com/legacy/empire-tmdb/films/1495/images/dzMGckpN2xAQDLr2Ddr8CZ3WbYF.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80',
      rating: 7.5
    },

    {
      title: 'Kudüs Fatihi Selahaddin Eyyubi',
      description: 'Selahaddin Eyyubi, known in the West as Saladin, is a prominent historical figure celebrated for his role as the leader who recaptured Jerusalem from the Crusaders. Born in 1137 or 1138 in Tikrit, which is now in modern-day Iraq, he was a Kurdish general and the founder of the Ayyubid dynasty.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Kud%C3%BCs_Fatihi_Selahaddin_Eyyubi.jpg/640px-Kud%C3%BCs_Fatihi_Selahaddin_Eyyubi.jpg',
      rating: 8.9
    },


  ];
  
  export default moviesData;
  