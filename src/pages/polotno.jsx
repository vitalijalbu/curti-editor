import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@/shared/editor/polotno'), {
  ssr: false,
});

export default function Polotno() {
  return (
    <div>
      <Editor />
      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
