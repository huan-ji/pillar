import React, { Component } from 'react';

class Person extends Component {
  render() {
    const { contact } = this.props

    if (!contact.notes) {
      return <div>No notes</div>
    }

    return (
      <div className="person">
        <div style={{ marginLeft: 44, borderLeft: '1px solid black'}}>
          <div style={{ marginLeft: 28, marginTop: 40, marginBottom: 30, position: 'relative' }}>
            <div className="circle" />
            <div style={{ fontWeight: 500, fontSize: 16 }}>Today</div>
          </div>
          {contact.notes.map((note) => {
            return (
              <div style={{ marginLeft: 28, marginBottom: 30, position: 'relative'}}>
                <div className="circle" />
                <div style={{ fontWeight: 500, fontSize: 16 , marginBottom: 10 }}>{note.time.format('MMMM Do YYYY')}</div>
                <div style={{ fontWeight: 300, fontSize: 14 }}>{note.text}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Person;
