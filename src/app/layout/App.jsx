import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";

export default function App() {

  return (
    <>
      <NavBar />
      <Container className='main'>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/events' exact element={<EventDashboard />} />
          <Route path='/events/:id' element={<EventDetailedPage />} />
          <Route path='/createEvent' element={<EventForm />} />
        </Routes>
      </Container>
    </>
  );
}
