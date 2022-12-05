export type PostType = {
    content: string,
    id: number,
    image_url: string,
    lat: string,
    long: string,
    title: string,
}
  
export type PostTypeWithTimestamp = {
    created_at?: string,
    updated_at?: string
  } & PostType
  