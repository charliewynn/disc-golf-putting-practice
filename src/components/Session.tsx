interface SessionProps {
  scores: Array<Boolean>;
}
const Session = (props: SessionProps) => {
  return (
    <div>
      <div>Session</div>
      {props.scores.map((p, i) => (p ? "good" : "bad"))}
    </div>
  );
};

export default Session;
