# how to solve
## 概要
どうやってやるの？を解決するサービス。  
コンテンツそのものはデータベースに依存する。

## 構成
大きくコンフィグとコンテンツに分かれ、それぞれのjsonをAPIで提供する。  
フロントエンドは基本的にカード型に近いデザインとし、コンフィグによってカラーテーマやラベルを定義する。

## エンドポイント
- /config
- /genreList
- /todoList?genreId=XXX
- /todoSolution?todoId=XXX

## データベース
### config
- uuid
- color_id
- label_id

### config_color
- color_id
- main
- main_dark
- main_light
- sub
- sub_dark
- sub_light
- font

カラーテーマ。マテリアルカラー推奨。

#### config_label
- label_id
- label_A
- label_B
- label_C

A : 『ジャンル』に当たる部分  
B : 『やりたいこと』に当たる部分  
C : 『解決策』に当たる部分

### genre_list
- genre_name
- genre_id(unique)

### todo
- genre_id(not unique, index)
- todo_name
- todo_id(unique)

### todo_solution
- todo_id(unique,index)
- description

### todo_links
- todo_id(not unique, index)
- link

### todo_example
- todo_id(not unique, index)
- sample_url

### todo_category
- todo_id(not unique, index)
- category_id(not unique, index)
- category_name
