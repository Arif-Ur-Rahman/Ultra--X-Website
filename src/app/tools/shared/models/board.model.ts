export interface Comment{
  id: number,
  title: string
}

export interface Card {
  id: number,
  text: string,
  like: number,
  dislike: number,
  comments: Comment[]
}

export interface Column{
  id: number,
  title: string,
  color: string,
  list: Card[]
}
