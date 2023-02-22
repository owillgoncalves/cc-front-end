export type VideoProps = { id: string, title: string, description: string, category: string, thumb: string }

export type VideoWithoutThumbProps = Omit<VideoProps, "thumb">;