import React, { useState } from 'react';
import axios from 'axios';
import questions from './questions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [formData, setFormData] = useState( {
    name: '',
    discordId: '',
    serverName: '',
    gradYear: '',
    collegeName: '',
    companyName: '',
    responses: '',
    ctcExpectation: '',
    output: '',
  } );

  const handleCheckboxChange = ( index, value ) => {
    const updatedResponses = [...formData.responses];
    updatedResponses[index] = value ? 'Yes' : 'No';
    setFormData( { ...formData, responses: updatedResponses } );
  };

  const handleSubmit = async () => {
    try {
      // Create an array with Yes and No responses with the specified spacing
      const requiredFields = ['name', 'discordId', 'serverName', 'gradYear', 'collegeName', 'companyName', 'responses', 'ctcExpectation'];
      const isFormFilled = requiredFields.every( field => formData[field] );

      if ( !isFormFilled ) {
        alert( 'Please fill all the details before submitting the response' );
        setLoading( false ); // Set loading to false if form is not filled completely
        return;
      }

      const responsesArray = formData.responses.map( ( response, index ) => {
        const spacing = index === formData.responses.length - 1 ? '     ' : '     '; // Adjust the spacing as needed
        return response === 'Yes' ? `Yes${spacing}` : `No${spacing}`;
      } );

      // Concatenate all responses and append ctcExpectation
      const formDataArray = responsesArray.join( '' ) + formData.ctcExpectation;

      // Update formDataToSend with the completeFormData
      const formDataToSend = { ...formData, formDataArray };

      console.log( 'Data to be sent:', formDataToSend ); // Log the data being sent

      const response = await axios.post( 'http://localhost:5000/saveFormData', formDataToSend );

      if ( response.status === 201 ) {
        console.log( 'Form data saved successfully.' );


        // Show success message or perform any other action
      } else {
        console.error( 'Error saving form data:', response.data );
        // Show error message or perform error handling
      }
      toast.success( 'Responses submitted successfully!', {
        position: 'top-right',
        autoClose: 3000,
      } );
    } catch ( error ) {
      console.error( 'Error saving form data:', error );
      toast.error( 'Error saving form data. Please try again later.' );
      // Show error message or perform error handling
    }

  };


  const [consoleLogs, setConsoleLogs] = useState( '' );
  const [loading, setLoading] = useState( false );
  const [showRoadmap, setShowRoadmap] = useState( false );


  const generateOutput = async () => {
    setLoading( true ); // Set loading to true when generating output

    // Check if all required fields are filled
    const requiredFields = ['name', 'discordId', 'serverName', 'gradYear', 'collegeName', 'companyName', 'responses', 'ctcExpectation'];
    const isFormFilled = requiredFields.every( field => formData[field] );

    if ( !isFormFilled ) {
      alert( 'Please fill all the details before generating the roadmap.' );
      setLoading( false ); // Set loading to false if form is not filled completely
      return;
    }

    try {
      const response = await axios.post( 'http://localhost:5000/generateOutput', {} );
      console.log( 'Generate output response:', response.data );

      setConsoleLogs( response.data.output );

      // Show roadmap after 5 seconds
      setTimeout( () => {
        setLoading( false ); // Set loading to false after timeout
        setShowRoadmap( true ); // Show roadmap
      }, 5000 );
    } catch ( error ) {
      console.error( 'Error generating output:', error );
      if ( error.response ) {
        console.error( 'Server responded with:', error.response.data );
      } else if ( error.request ) {
        console.error( 'No response received:', error.request );
      } else {
        console.error( 'Error setting up request:', error.message );
      }
    } finally {
      setLoading( false ); // Set loading to false after receiving the response
    }
  };


  const renderQuestionsWithLinks = () => {
    return questions.map( ( question, index ) => {
      const questionWithLinks = question.replace(
        /https?:\/\/[^\s]+/g,
        ( match ) => `<a href="${match}" target="_blank" rel="noopener noreferrer">${match}</a>`
      );

      return (
        <div key={index} className="mb-4">
          <label>{`Q ${index + 1}: `}</label>
          <span dangerouslySetInnerHTML={{ __html: questionWithLinks }} />
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              checked={formData.responses[index] === 'Yes'}
              onChange={( e ) => handleCheckboxChange( index, e.target.checked )}
              className="form-checkbox mr-2 "
            />
            <label className="mr-4">Yes</label>
            <input
              type="checkbox"
              checked={formData.responses[index] === 'No'}
              onChange={( e ) => handleCheckboxChange( index, !e.target.checked )}
              className="form-checkbox mr-2"
            />
            <label>No</label>
          </div>
        </div>
      );
    } );
  };

  return (
    <div className="container mx-auto p-6">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Roadmap Generation</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 gap-4 ">
            <div className="flex items-center">
              <label className="w-32 text-gray-800">Name:</label>
              <input
                type="text"
                value={formData.name}
                onChange={( e ) => setFormData( { ...formData, name: e.target.value } )}
                className="input-field bg-slate-300 border border-black " placeholder='Name'
              />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-gray-800">Discord Id:</label>
              <input
                type='text'
                required
                value={formData.discordId}
                onChange={( e ) => setFormData( { ...formData, discordId: e.target.value } )}
                className="input-field  bg-slate-300 border border-black " placeholder='Discord Id'
              />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-gray-800">Batch Discord Server Name:</label>
              <input
                type='text'
                value={formData.serverName}
                onChange={( e ) => setFormData( { ...formData, serverName: e.target.value } )}
                className="input-field  bg-slate-300 border border-black " placeholder='Server Name'
              />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-gray-800">Graduation Year:</label>
              <input
                type='text'
                value={formData.gradYear}
                onChange={( e ) => setFormData( { ...formData, gradYear: e.target.value } )}
                className="input-field  bg-slate-300 border border-black " placeholder='Grad Year'
              />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-gray-800">College Name:</label>
              <input
                type='text'
                value={formData.collegeName}
                onChange={( e ) => setFormData( { ...formData, collegeName: e.target.value } )}
                className="input-field  bg-slate-300 border border-black " placeholder='College Name'
              />
            </div>
            <div className="flex items-center">
              <label className="w-32 text-gray-800">Current Company (Write NA if none):</label>
              <input
                type='text'
                value={formData.companyName}
                onChange={( e ) => setFormData( { ...formData, companyName: e.target.value } )}
                className="input-field  bg-slate-300 border border-black " placeholder='Company Name'
              />
            </div>
          </div>
        </div>
        <h3 className="text-lg font-bold mt-6">Kindly provide your responses thoughtfully, we will help you</h3>
        {renderQuestionsWithLinks()}
        <div className="mt-6">
          <label className="block mb-1">Q 101: Your Minimum Target CTC  (In terms of LPA)</label>
          <input
            type="text"
            name="ctcExpectation"
            value={formData.ctcExpectation}
            onChange={( e ) => setFormData( { ...formData, ctcExpectation: e.target.value } )}
            required
            className="input-field  bg-slate-300 border border-black " placeholder='Enter the CTC'
          />
        </div>
        <button type="button" onClick={handleSubmit} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
          Submit Responses
        </button>
        <button type="button" onClick={generateOutput} className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Generate Roadmap
        </button>
        <pre className="mt-4 border border-gray-300 p-4 max-h-100 overflow-auto">
          {loading ? 'Your roadmap is being generated...' : showRoadmap ? consoleLogs : null}
        </pre>
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-75 flex justify-center items-center z-50">
            <div className="text-white text-lg flex flex-col items-center">
              <p className='mb-4'>Your roadmap is being generated</p>
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default App;
