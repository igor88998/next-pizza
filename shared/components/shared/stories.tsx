'use client'

import { Api } from '@/shared/services/api-client'
import { IStory } from '@/shared/services/stories'
import React from 'react'
import { Container } from './container'
import { cn } from '@/shared/lib/utils'
import { X } from 'lucide-react'

import ReactStories from 'react-insta-stories';

interface Props {
    className?: string
}

export const Stories: React.FC<Props> = ({ className }) => {

    const [stories, setStories] = React.useState<IStory[]>([])
    const [open, setOpen] = React.useState(false)
    const [selectedStory, setSelectedStory] = React.useState<IStory>()

    React.useEffect(() => {
        async function fetchStories() {
            const data = await Api.stories.getAll()
            setStories(data)
        }

        fetchStories()
    }, [])

    const onClickStory = (story: IStory) => {
        setSelectedStory(story)

        if (story.items.length > 0) {
            setOpen(true)
        }
    }

    return (
        <>
            <Container className={cn(className, 'flex items-center justify-between gap-2 my-10')}>
                {stories.length === 0 &&
                    [...Array(6)].map((_, index) => (
                        <div key={index} className='w-[200px] h-[250px] bg-gray-200 rounded-md animate-pulse' />
                    ))
                }

                {stories.map((story) => (
                    <div
                        key={story.id}
                        className="w-[200px] h-[250px] overflow-hidden rounded-md cursor-pointer"
                        onClick={() => onClickStory(story)}
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={story.previewImageUrl}
                            alt={`Story ${story.id}`}
                        />
                    </div>
                ))}

                {open && selectedStory && (
                    <div className='fixed left-0 top-0 w-full h-full flex items-center bg-black/80 justify-center z-30'>
                        <div
                            className="absolute left-0 top-0 w-full h-full bg-cover bg-center blur-sm "
                            onClick={(e) => {
                                if (e.target === e.currentTarget) {
                                    setOpen(false);
                                }
                            }}
                        />

                        <div className="fixed z-40" style={{ width: 520 }}>
                            <button
                                className="absolute -right-10 -top-5 z-30"
                                onClick={() => setOpen(false)}
                            >
                                <X className="absolute top-0 right-0 w-8 h-8 text-white" />
                            </button>

                            <ReactStories
                                onAllStoriesEnd={() => setOpen(false)}
                                stories={selectedStory?.items.map((item) => ({
                                    url: item.sourceUrl,
                                })) || []}
                                defaultInterval={3000}
                                width={520}
                                height={700}
                                storyStyles={{
                                    objectFit: 'cover',
                                    height: '100%',
                                    minHeight: '700px',
                                }}
                            />
                        </div>
                    </div>
                )}
            </Container>
        </>
    )
}