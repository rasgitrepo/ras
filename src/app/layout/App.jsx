import React, { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import NavBar from "../../features/nav/NavBar";
import Sandbox from "../../features/sandbox/Sandbox";
import ModalManager from "../common/modals/ModalManager";

export default function App() {
  const {key} = useLocation();

  return (
    <>
      <ModalManager />
      <NavBar />
      <Container className='main'>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/events' exact element={<EventDashboard />} />
          <Route path='/sandbox' exact element={<Sandbox />} />
          <Route path='/events/:id' element={<EventDetailedPage />} />
          <Route path='/createEvent' exact element={<EventForm />} key={key} />
          <Route path='/manage/:id' element={<EventForm />} key={key} />
        </Routes>
      </Container>
    </>
  );
}
