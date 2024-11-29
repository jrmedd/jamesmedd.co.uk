export const YouTubeEmbed = ({
  videoId,
  width = '560',
  height = '315',
}) => {
  if (!videoId) {
    console.error('YouTubeEmbed component requires a `videoId` prop.');
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      />
    </div>
  );
};
