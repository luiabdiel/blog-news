import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.scss'

interface CommentProps {
    content: string
    onDeleteComment: (commet: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1 
        })
    }
    
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/imerik1.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Erik Marques</strong>
                            <time title='22 de Setembro 19:25h' dateTime='2022-09-22 19:25:21'>Cerca de 2h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}