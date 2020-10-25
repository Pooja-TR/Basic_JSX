import './App.css';
import Comment from './components/comment';
import ApprovalCard from './components/approvalCard';
import faker from 'faker';

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard >
        <Comment
          author="User123"
          timeAgo="Today at 4:45AM"
          commentDesc="Nice blog post!"
          userDp={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="User53"
          timeAgo="Today at 1:50AM"
          commentDesc="Good work"
          userDp={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="User44"
          timeAgo="Today at 6:45PM"
          commentDesc="Great.Lots of fun:)"
          userDp={faker.image.avatar()} />
      </ApprovalCard>


    </div>
  );
}

export default App;
