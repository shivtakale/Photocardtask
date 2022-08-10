let cl = console.log;

let data= [
		{
		  "albumId": 1,
		  "id": 1,
		  "title": "accusamus beatae ad facilis cum similique qui sunt",
		  "url": "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9ib3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
		},
		{
		  "albumId": 1,
		  "id": 2,
		  "title": "reprehenderit est deserunt velit ipsam",
		  "url": "https://images.unsplash.com/photo-1612958668852-797cdb4a70c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaWxkJTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
		  "thumbnailUrl": "https://via.placeholder.com/150/771796"
		},
		{
		  "albumId": 1,
		  "id": 3,
		  "title": "officia porro iure quia iusto qui ipsa ut modi",
		  "url": "https://images.unsplash.com/photo-1657779074633-0e022365bbca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		  "thumbnailUrl": "https://via.placeholder.com/150/24f355"
		},
		{
		  "albumId": 1,
		  "id": 4,
		  "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
		  "url": "https://images.unsplash.com/photo-1658498042419-be460a938f93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		  "thumbnailUrl": "https://via.placeholder.com/150/d32776"
		},
		{
		  "albumId": 1,
		  "id": 5,
		  "title": "natus nisi omnis corporis facere molestiae rerum in",
		  "url": "https://images.unsplash.com/photo-1658240364743-4706c0ef1a3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOXxDRHd1d1hKQWJFd3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
		  "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
		},
		{
			"albumId": 2,
			"id": 51,
			"title": "non sunt voluptatem placeat consequuntur rem incidunt",
			"url": "https://images.unsplash.com/photo-1659880233848-1f4eaf4f753c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
			"thumbnailUrl": "https://via.placeholder.com/150/8e973b"
		  },
		  {
			"albumId": 2,
			"id": 52,
			"title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
			"url": "https://images.unsplash.com/photo-1659879003706-378e6b74d461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
			"thumbnailUrl": "https://via.placeholder.com/150/121fa4"
		  },
		  {
			"albumId": 2,
			"id": 53,
			"title": "soluta et harum aliquid officiis ab omnis consequatur",
			"url": "https://images.unsplash.com/photo-1657299156568-c94580e20fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
			"thumbnailUrl": "https://via.placeholder.com/150/6efc5f"
		  },
		  {
			"albumId": 3,
			"id": 105,
			"title": "veritatis numquam eius",
			"url": "https://images.unsplash.com/photo-1642350098609-63ffa06c6a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			"thumbnailUrl": "https://via.placeholder.com/150/eaf2e1"
		  },
		  {
			"albumId": 3,
			"id": 106,
			"title": "repellat molestiae nihil iste autem blanditiis officiis",
			"url": "https://images.unsplash.com/photo-1659862925038-08a86ddfeb1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			"thumbnailUrl": "https://via.placeholder.com/150/b1f841"
		  },
		  {
			"albumId": 3,
			"id": 107,
			"title": "maiores ipsa ut autem",
			"url": "https://images.unsplash.com/photo-1659889506782-3c42f03b1739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			"thumbnailUrl": "https://via.placeholder.com/150/50d332"
		  },
		  {
			"albumId": 3,
			"id": 108,
			"title": "qui tempora vel exercitationem harum iusto voluptas incidunt",
			"url": "https://images.unsplash.com/photo-1659880342912-51f8e9682e1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			"thumbnailUrl": "https://via.placeholder.com/150/627495"
		  },
		  {
			"albumId": 4,
			"id": 163,
			"title": "est eos ducimus consequatur est",
			"url": "https://images.unsplash.com/photo-1659624950451-8b8d89c00723?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			"thumbnailUrl": "https://via.placeholder.com/150/aae0f3"
		  },
		  {
			"albumId": 4,
			"id": 164,
			"title": "aut quia enim id neque expedita aliquid",
			"url": "https://images.unsplash.com/photo-1659631559620-934edaad620c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			"thumbnailUrl": "https://via.placeholder.com/150/939eae"
		  },
		  {
			"albumId": 4,
			"id": 165,
			"title": "voluptas dolorem rerum similique quis id unde",
			"url": "https://images.unsplash.com/photo-1659849025892-f9318988ad00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			"thumbnailUrl": "https://via.placeholder.com/150/1b5aec"
		  },
		  {
			"albumId": 4,
			"id": 166,
			"title": "harum accusamus asperiores",
			"url": "https://images.unsplash.com/photo-1659817674898-3564a596737c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
			"thumbnailUrl": "https://via.placeholder.com/150/74c0c4"
		  }
	];

let postInfo = document.getElementById("postInfo");

let result=''
data.forEach((post)=> {
	result +=`
		<div class="col-md-3 mb-4">
			<div class="card">
				<div class="card-body">
					<figure class="post">
						<img src="${post.url}" class="img-fluid" alt="">
						<figcaption>
							${post.title}
						</figcaption>
						<span class="id">Id: ${post.id}</span>
						<span class="albumId">Album Id:${post.albumId}</span>
					</figure>
				</div>
			</div>
		</div>
		`
})

postInfo.innerHTML = result;