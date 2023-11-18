# [0.6.0](https://github.com/zhid0399123/fastodo/compare/0.5.0...0.6.0) (2023-11-18)


### Bug Fixes

* **config:** set log level on runtime from tests ([3d4c67a](https://github.com/zhid0399123/fastodo/commit/3d4c67a6bc49a5e6149eea08a510620e9300b2f5))
* **logger:** target "pino-pretty" when testing logger ([8f4efe6](https://github.com/zhid0399123/fastodo/commit/8f4efe6d96801041cdcc9ba852701636e45339c5))
* **metrics:** register prometheus metrics plugin on production only ([63f1900](https://github.com/zhid0399123/fastodo/commit/63f1900284a4ee51f32a7b43cab1421112d4becb))
* **mongodb:** use mongodb cloud/database url only when in production ([6ab56ac](https://github.com/zhid0399123/fastodo/commit/6ab56acd704e88bbf1d5679777f98e99d2514245))


### Features

* **authenticate:** added logBody in route config to log request body onRequest/onResponse ([c13cd8e](https://github.com/zhid0399123/fastodo/commit/c13cd8e7dd3914c0080377550dfb663ad8f4225a))
* **bin:** server entrypoint ([556d7fa](https://github.com/zhid0399123/fastodo/commit/556d7fa54637e6a35cb996bb6fad35accab1c6ec))
* **clinic:** entry point ([796e937](https://github.com/zhid0399123/fastodo/commit/796e937b4d0c25c02c6a846c228de4f5936ad08a))
* **dotenv:** added LOG_LEVEL variable in .env schema ([615e271](https://github.com/zhid0399123/fastodo/commit/615e271d028b14aa3e85859a9e38785b7d016144))
* **dotenv:** removed DEV_MONGO_URL property and updated required fields ([02c18f2](https://github.com/zhid0399123/fastodo/commit/02c18f2439bd536662e964cf7b59c04011f6deb7))
* **error:** added onRequest and onResponse hooks for our custom logger ([fca63d2](https://github.com/zhid0399123/fastodo/commit/fca63d25ab22d8228bc083d2a3756bc0f222e5f5))
* **error:** added onRequest and onResponse logger hooks ([3c4e133](https://github.com/zhid0399123/fastodo/commit/3c4e133f33d85a06570a630de4e521f4e2f19d64))
* **logger:** custom pino logger ([868eb59](https://github.com/zhid0399123/fastodo/commit/868eb594641b3ee7bf640751ac9a3b81519e1f44))
* **mongodb:** configured min & maxPoolSize and changed conditional passing of MONGO_URL ([cd0e540](https://github.com/zhid0399123/fastodo/commit/cd0e540f3b3bfc1863ea0af598395033c0fa77d8))
* **register:** added logBody in route config to log request body onRequest/onResponse ([d158ee2](https://github.com/zhid0399123/fastodo/commit/d158ee2613c02b4fca38fac209c88ac4df1bd5e4))
* **server:** configured custom log ([f97aab9](https://github.com/zhid0399123/fastodo/commit/f97aab9df2a0dfe2b84c3176b78d7bb88466c101))
* **swagger:** configured swagger plugin ([8a1cbe7](https://github.com/zhid0399123/fastodo/commit/8a1cbe76bac0cba4ffac352fac9392ee8915ebdd))
* **tracing:** openTelemetry and zipkin configurations ([abb50f3](https://github.com/zhid0399123/fastodo/commit/abb50f3e8a9e9f55450965fa146b4d9ca984136b))



# [0.5.0](https://github.com/zhid0399123/fastodo/compare/v0.1.0-beta...0.5.0) (2023-11-13)


### Bug Fixes

* **auth-route:** assigns users collection to [] id db undefined during test ([5ef5c3a](https://github.com/zhid0399123/fastodo/commit/5ef5c3a5b8c51ed8b1e04c68d38e8a5fbff5bd05))
* **fly:** added " at the end of metric.path ([aebbeef](https://github.com/zhid0399123/fastodo/commit/aebbeef1839f4a8375f0c7cf055ff305685fcbe4))
* **helper:** changed MONGO_URL hostIp ([4cf36ee](https://github.com/zhid0399123/fastodo/commit/4cf36ee91207c3aea5985b24bc63a3467918e22d))
* **helper:** fixed typo on JWT_SECRET ([b765724](https://github.com/zhid0399123/fastodo/commit/b765724e22342e37e1b88c43b117b3c380c494cf))
* **route-louder:** assigns todos collection to [] id db undefined during test ([d8df9df](https://github.com/zhid0399123/fastodo/commit/d8df9dfe99e7ee08291d726c2e2bf3cb3f2ace73))


### Features

* **auth-loader:** updated dependancy ([ef166b3](https://github.com/zhid0399123/fastodo/commit/ef166b3abfdfbd5b3a8ad1ff065b0db0c3f5ee12))
* **metrics:** prom metrics plugin to collect app process data ([8e2a045](https://github.com/zhid0399123/fastodo/commit/8e2a045ac542de2750ff08e5c05e533b1fc54225))
* **mongodb:** removed after() callback ([236fa75](https://github.com/zhid0399123/fastodo/commit/236fa75b42457c85491865f646b78d72f14c81d1))
* **promServer:** util that build a promServer ([c0de693](https://github.com/zhid0399123/fastodo/commit/c0de6939272b6c6c090a5953ea07bdfce817322f))
* **route-loader:** updated dependancy ([10c19b2](https://github.com/zhid0399123/fastodo/commit/10c19b2615e060062c211adc7a62d603141f1255))



# [0.4.0](https://github.com/zhid0399123/fastodo/compare/0.3.0...0.4.0) (2023-11-09)


### Bug Fixes

* **export:** Converted cursor to a readable stream before piping it to csv-stringify ([4c11f6c](https://github.com/zhid0399123/fastodo/commit/4c11f6c8cd2afc620ed15a3ad5e3de2bdf28db3c))


### Features

* **import-todo-file-response:** schema for csv file import serialization ([4182a32](https://github.com/zhid0399123/fastodo/commit/4182a326f5c8e802239a486bc1b963d88b3e03cf))
* **schemas-loader:** added csv import response schema ([7e6aa97](https://github.com/zhid0399123/fastodo/commit/7e6aa979e1e522b091ce0bfa01d6259c687877d3))



# [0.3.0](https://github.com/zhid0399123/fastodo/compare/0.2.0...0.3.0) (2023-11-09)


### Features

* **auth-refresh-token-header:** schema for validation of jwt token on token /refresh route ([0da71e3](https://github.com/zhid0399123/fastodo/commit/0da71e3bc3081a3dbffafa6739c56fd4fce239ea))
* **auth-register-body:** schema for validating payload sent on /register route ([ed14a90](https://github.com/zhid0399123/fastodo/commit/ed14a90aba4d796f9a84d926ab9ca86646017fb1))
* **auth-token-response:** schema for response serialization of jwt generated ([a53110f](https://github.com/zhid0399123/fastodo/commit/a53110f5fc24e0bb97db0c7492a2263addbdca63))
* **bin:** entry point ([62fd255](https://github.com/zhid0399123/fastodo/commit/62fd255b0551ae54fe4eba508d15db8c4fefd5e7))
* **dotenv:** schema for @fastify/env plugin ([f875765](https://github.com/zhid0399123/fastodo/commit/f8757650b745d32e5d27201a986c7ff7ddc58e20))
* **fastifyServer:** fastify server ([a84f85e](https://github.com/zhid0399123/fastodo/commit/a84f85e458cecbd95da981a9b23179a80bfc81ae))
* **get-todo-param:** schema to validate too get param ([464c535](https://github.com/zhid0399123/fastodo/commit/464c535e0739e456d11e2aae9c60f6a13b5084a3))
* **get-todo-query-export:** schema for validation of todos export query ([56b1eaa](https://github.com/zhid0399123/fastodo/commit/56b1eaae8c6f845d8a63371d950e1e00ea9b843c))
* **get-todo-query:** schema to validate get todo queries ([48c7661](https://github.com/zhid0399123/fastodo/commit/48c7661c1cecaf5f0e7a017996016fb34af6d8b4))
* **get-todo-response:** schema for serialization of get todo response ([f2fd7a5](https://github.com/zhid0399123/fastodo/commit/f2fd7a5a1185fc818a2e836cee783dbb3ad804f3))
* **hash:** hash password ([ec37783](https://github.com/zhid0399123/fastodo/commit/ec37783ba74d0ed868c55b7fe543842fb27c4e7f))
* **index:** server starting point ([f182af9](https://github.com/zhid0399123/fastodo/commit/f182af9aaaa59e671d6d63b0f4a3dd3d0240fe8a))
* **limit:** schema for validation of limit query ([555b5ff](https://github.com/zhid0399123/fastodo/commit/555b5ffbc351ce8cfeb5c43d670d96d499a252ab))
* **post-status-error-response:** schema for serialization of post status error ([224001b](https://github.com/zhid0399123/fastodo/commit/224001bef44dd0282cd78dbaa65bea172e616268))
* **post-status-param:** schema to validate todo status update params ([c94654d](https://github.com/zhid0399123/fastodo/commit/c94654d72b2cfc50ae7dfbc601be80ab25f77af7))
* **post-todo-body:** schema that validate todo payload ([469ccc8](https://github.com/zhid0399123/fastodo/commit/469ccc881aca2265af3dc1189b53ca7e9a4f2579))
* **post-todo-response:** schema for serialization of post todo response ([b082f86](https://github.com/zhid0399123/fastodo/commit/b082f869034c69785e2ffc33ce25c29d1b4f9e81))
* **put-todo-body:** schema to validate todo update payload ([e850a9a](https://github.com/zhid0399123/fastodo/commit/e850a9aeb2733af55e077b265a6613204f1e1678))
* **refereshToken:** util handler that generate jwt token ([a368eda](https://github.com/zhid0399123/fastodo/commit/a368edac4eaf480903f939827385bb3b572e2123))
* **schemas-loader:** loads all the schemas on boot ([cf59537](https://github.com/zhid0399123/fastodo/commit/cf59537d2f19c17878865d218571a3992ade3a5f))
* **skip:** schema for validation of todo skip query ([38d700b](https://github.com/zhid0399123/fastodo/commit/38d700b49d75664981d745a263ae6bccda56f9e7))
* **todo-data:** schema for todo data ([a632b13](https://github.com/zhid0399123/fastodo/commit/a632b1351bbfcedd08d78c2368e39819e91b6bc3))



# [0.2.0](https://github.com/zhid0399123/fastodo/compare/0.1.0...0.2.0) (2023-11-08)


### Features

* **authentication:** user authentication route ([9572f26](https://github.com/zhid0399123/fastodo/commit/9572f26e170a4e785811ace6fd13be1e3513053c))
* **DELETE:** todo delete endpoint ([828207b](https://github.com/zhid0399123/fastodo/commit/828207b73633fc57b6cbd19b980b3106330d38ec))
* **export:** todos.csv exportation route ([1271118](https://github.com/zhid0399123/fastodo/commit/12711187a3c78ac7027bf647c13fffd8401d4ced))
* **import:** todos.csv importation route ([22fa8a1](https://github.com/zhid0399123/fastodo/commit/22fa8a12afef15e3d675237d8beaa25cfeed0f38))
* **loader:** loads all todos route on boot ([14d5228](https://github.com/zhid0399123/fastodo/commit/14d5228c222f502c53999758ae18d327d3b7207c))
* **loader:** loads auth routes on boot ([35b5f41](https://github.com/zhid0399123/fastodo/commit/35b5f41102c767e34c7490f6e516dc57e996d247))
* **logout:** logout route for authenticated user ([649c23d](https://github.com/zhid0399123/fastodo/commit/649c23d5f93b38d5a39589b9c02f6dc17600b413))
* **mongodb:** registered mongodb plugin to connect to our database during booting  using @fastify/mongodb ([8c09df8](https://github.com/zhid0399123/fastodo/commit/8c09df8b07f94348a91053193de21cfd448528c1))
* **refreshToken:** route to refresh jwt token for authenticated user ([9b263f6](https://github.com/zhid0399123/fastodo/commit/9b263f6ee1fc4c0c1d544896b6539baf27b9ae8c))
* **registration:** route for new user registration ([cc2176a](https://github.com/zhid0399123/fastodo/commit/cc2176a6fb086e7f35f8a646e8e1f5a67c796411))
* **root:** root route (/) ([8cb019d](https://github.com/zhid0399123/fastodo/commit/8cb019d2a7a3d64337a50050635334b03bc0d085))
* **status:** update todo status (:/id/:status) endpoint ([9fc7d13](https://github.com/zhid0399123/fastodo/commit/9fc7d13de673f438ab1964560651fb3b84010073))
* **swaggerPlugin:** configured @fastify/swagger ([9a74056](https://github.com/zhid0399123/fastodo/commit/9a7405673ccf684698995708dcec0bc0dc26c740))
* **todo:** get todo (/:id) endpoint ([58bf335](https://github.com/zhid0399123/fastodo/commit/58bf3357072b9522e38e4acba44c000f1fdbaffd))
* **todo:** post single todo (/) endpoint ([d0ae427](https://github.com/zhid0399123/fastodo/commit/d0ae427f701aafec6bab3e1e9cfded1dc500c3e5))
* **todos:** get todos (/) endpoint ([09c07ce](https://github.com/zhid0399123/fastodo/commit/09c07ce337066e31071d3749e96382bdac8f9c3c))
* **todo:** update todo content (:id) endpoint ([638db64](https://github.com/zhid0399123/fastodo/commit/638db642a6d251558d49bc38a4d101cc2c407ae9))



# [0.1.0](https://github.com/zhid0399123/fastodo/compare/426c7303cfb7e44a7d91735e6a14063397821856...0.1.0) (2023-11-08)


### Features

* **authPlugin:** configured auth using @fastify/jwt ([2d06122](https://github.com/zhid0399123/fastodo/commit/2d061222d15c8a7f9dd7d3e9476b36ff31feb8fe))
* **corsPlugin:** made our server reachable ([8676518](https://github.com/zhid0399123/fastodo/commit/8676518910a73bc1d08616980447b7228c2fb91b))
* **errorHandler:** extended error handler for code =>500 ([b1ea729](https://github.com/zhid0399123/fastodo/commit/b1ea72989983dedd1ead0528da8d19ea88403d55))
* **options:** ignoiredTrailingSlash ([426c730](https://github.com/zhid0399123/fastodo/commit/426c7303cfb7e44a7d91735e6a14063397821856))



