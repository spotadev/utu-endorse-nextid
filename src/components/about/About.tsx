import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {

  return (
    <>
      <div style={{ textAlign: 'right' }}>
        <Link to={'/'}>
          Home
        </Link>
      </div >
      <div style={{ color: 'green', fontWeight: 'bold' }}>
        About this dApp
      </div>
      <div style={{ paddingTop: '20px' }}>
        This dApp combines 2 components:
        <ul>
          <li>next.id</li>
          <li>UTU Trust</li>
        </ul>
        <div style={{ color: 'maroon', fontWeight: 'bold', fontStyle: 'italic', paddingTop: '20px' }}>
          next.id
        </div>
        <p>
          next.id provides a Decentralised ID (DID) which aggregates a users different web 2.0
          and web 3.0 handles together.
        </p>
        <p>
          This dApp provides a GUI so that users can link their different social handles
          together.
        </p>
        <p>
          This next.id service is particularly useful in the crypto space for linking
          wallet addresses to other identities also owned by the user.
        </p>
        <p>
          A DID makes it easier to see whether a wallet address is associated with a
          genuine user or a spammer.
        </p>
        <div style={{ color: 'maroon', fontWeight: 'bold', fontStyle: 'italic', paddingTop: '20px' }}>
          UTU Trust
        </div>
        <p>
          UTU Trust is about getting feedback from people in your social network as to the
          trustworthiness of a resource. Users often value the opinions of known people more
          than the opinions of strangers.
        </p>
        <p>
          The UTU Trust tech allows you to endorse a resource.  In this dApp a user can
          endorse a user of a DID as to having a certain characteristic.
        </p>
        <p>
          For example you could endorse someone as being a good chef.
        </p>
        <p>
          This endorse part of this dApp has not yet been coded.  Coming soon!
        </p>
        <div style={{ color: 'green', fontWeight: 'bold', paddingTop: '20px' }}>
          About the Developers
        </div>
        <p>
          The developers of this dApp are open source crypto enthusiasts who want to create value
          for decentralised: applications, systems and users.
        </p>
        <p>
          If you want to get in touch with the developers add an issue here:
          <br /><br /> &nbsp;&nbsp;&nbsp;
          <a href="https://github.com/spotadev/utu-endorse-nextid/discussions" target="_discussions">
            https://github.com/spotadev/utu-endorse-nextid/discussions
          </a>
        </p>
        <p>
          Power to the People!
        </p>
        <p>
          Unity & One Love
        </p>
      </div>
    </>
  );
}