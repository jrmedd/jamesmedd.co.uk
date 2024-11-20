import styled, { css } from 'styled-components'
import { LogoWrapper } from './LogoWrapper'

export const Scouts = props => (
  <LogoWrapper viewBox="0 0 176 50">
    <path d="m0 39.27 3.18-3.81c2.2 1.82 4.5 2.97 7.3 2.97 2.2 0 3.52-.87 3.52-2.3v-.08c0-1.36-.84-2.06-4.92-3.11-4.93-1.26-8.1-2.63-8.1-7.49v-.07C.98 20.94 4.54 18 9.53 18c3.56 0 6.6 1.12 9.08 3.11l-2.8 4.06c-2.16-1.5-4.29-2.41-6.35-2.41-2.06 0-3.14.94-3.14 2.13v.07c0 1.61 1.05 2.14 5.27 3.22 4.96 1.3 7.75 3.08 7.75 7.35v.07c0 4.86-3.7 7.59-8.97 7.59-3.7 0-7.44-1.3-10.37-3.92Zm21.8-6.07v-.06a9.62 9.62 0 0 1 9.81-9.76c3.53 0 5.73 1.19 7.48 3.15l-3.25 3.5c-1.19-1.27-2.37-2.07-4.26-2.07-2.65 0-4.54 2.34-4.54 5.1v.08c0 2.87 1.85 5.17 4.75 5.17 1.78 0 3-.77 4.3-1.99l3.1 3.15a9.42 9.42 0 0 1-7.65 3.43 9.56 9.56 0 0 1-9.74-9.7Zm33.44 0v-.06c0-2.77-1.99-5.18-4.92-5.18-3.04 0-4.85 2.34-4.85 5.1v.08c0 2.76 1.99 5.17 4.92 5.17 3.04 0 4.85-2.34 4.85-5.1Zm-15.01 0v-.06c0-5.39 4.33-9.76 10.16-9.76 5.8 0 10.09 4.3 10.09 9.69v.07c0 5.38-4.33 9.76-10.16 9.76-5.8 0-10.1-4.3-10.1-9.7Zm22.32 2.67V23.73h5.3v10.46c0 2.52 1.2 3.8 3.22 3.8 2.02 0 3.31-1.28 3.31-3.8V23.73h5.31v18.75h-5.3v-2.66c-1.23 1.57-2.8 3-5.49 3-4.01 0-6.35-2.65-6.35-6.95Zm20.22 1.29V18.93h5.31v4.8h4.4v4.54h-4.4v8.01c0 1.23.52 1.82 1.71 1.82a5.4 5.4 0 0 0 2.62-.66v4.27a7.81 7.81 0 0 1-4.19 1.08c-3.25 0-5.45-1.3-5.45-5.63ZM94.82 40l2.27-3.5c2.02 1.46 4.15 2.23 5.9 2.23 1.53 0 2.23-.56 2.23-1.4v-.06c0-1.16-1.81-1.54-3.88-2.17-2.61-.77-5.58-2-5.58-5.64v-.07c0-3.8 3.07-5.94 6.84-5.94 2.38 0 4.96.8 6.98 2.17l-2.02 3.67c-1.85-1.09-3.7-1.75-5.06-1.75-1.3 0-1.96.56-1.96 1.3v.06c0 1.05 1.78 1.54 3.8 2.24 2.63.88 5.66 2.14 5.66 5.57v.06c0 4.17-3.1 6.06-7.15 6.06a13.1 13.1 0 0 1-8.03-2.84Zm40.9-17.44a17.25 17.25 0 0 1 2.51 6.79H141a19.79 19.79 0 0 0-2.98-8.3c-2.21-3.4-5.1-5.2-8.33-5.2h-.02a8.1 8.1 0 0 0-6.34 3.05 8.57 8.57 0 0 0-1.7 7.24l2.68-.6a5.9 5.9 0 0 1 1.16-4.9 5.3 5.3 0 0 1 4.2-2.03h.02c2.86 0 4.86 2.14 6.03 3.95Zm19.95 19.27a13.24 13.24 0 0 1-2.2-5h-2.8a15.6 15.6 0 0 0 2.29 5.9 11.63 11.63 0 0 1-4.4 4.05h-.01a11.61 11.61 0 0 1-4.4-4.06 15.59 15.59 0 0 0 2.28-5.88h-2.8a13.24 13.24 0 0 1-2.2 4.99l-.46.65.33.73c1.16 2.54 3.86 5.1 6.7 6.35l.55.25.56-.25c2.84-1.25 5.53-3.8 6.7-6.35l.33-.73-.47-.65Zm5.72-19.27a17.23 17.23 0 0 0-2.52 6.79h-2.76a19.78 19.78 0 0 1 2.98-8.3c2.2-3.4 5.09-5.2 8.32-5.2h.02a8.1 8.1 0 0 1 6.34 3.05 8.57 8.57 0 0 1 1.7 7.24l-2.68-.6a5.9 5.9 0 0 0-1.15-4.9 5.31 5.31 0 0 0-4.2-2.03h-.02c-2.86 0-4.86 2.14-6.03 3.95Zm-17.64 6.79h2.77c-.35-3.2-1.6-5.98-2.7-8.44-1.1-2.46-2.15-4.78-2.14-7.1.03-2.65 1.54-5.37 4.05-7.25.44-.33 1.7-1.3 2.82-2.33 1.13 1.03 2.38 2 2.82 2.33 2.51 1.88 4.03 4.6 4.05 7.26.02 2.31-1.03 4.63-2.13 7.1-1.11 2.45-2.36 5.23-2.7 8.43h2.76c.34-2.64 1.4-5.01 2.44-7.3 1.23-2.75 2.4-5.34 2.38-8.25-.03-3.52-1.96-7.05-5.15-9.44a31.78 31.78 0 0 1-3.46-3l-1-1.08-1.01 1.08a31.83 31.83 0 0 1-3.46 3c-3.2 2.4-5.12 5.92-5.15 9.44-.02 2.91 1.14 5.5 2.37 8.24 1.04 2.3 2.1 4.67 2.44 7.3Zm-10.88 5.06h31.36v-2.64h-31.36v2.64Z" clip-rule="evenodd"/></LogoWrapper>
)

