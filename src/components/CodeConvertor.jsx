import React, { useState } from 'react';
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import axios from 'axios';

export default function CodeConvertor() {
    const [legacyCode, setLegacyCode] = useState('');
    const [selectedConvertLanguage, setSelectedConvertLanguage] = useState('')
    const [convertedCode, setConvertedCode] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errorText, setErrorText] = useState("")

    const data = {
        "query": "Imports System\n\nModule DataOperationWithDatabase\n\n    MustInherit Class DataOperation\n        Public MustOverride Function PerformOperation(ByVal Input As Integer) As Integer\n    End Class\n\n    Class AdditionOperation\n        Inherits DataOperation\n        Public Overrides Function PerformOperation(ByVal Input As Integer) As Integer\n            Return Input + 10\n        End Function\n    End Class\n\n    Class SubtractionOperation\n        Inherits DataOperation\n        Public Overrides Function PerformOperation(ByVal Input As Integer) As Integer\n            Return Input - 5\n        End Function\n    End Class\n\n    Module DatabaseUpdater\n        Public Sub UpdateDatabase(ByVal OperationName As String, ByVal Input As Integer, ByVal Output As Integer)\n            Console.WriteLine(\"Updating database with operation: \" & OperationName & \", Input: \" & Input & \", Output: \" & Output)\n            ' Code to update the database with the operation details\n        End Sub\n    End Module\n\n    Sub Main()\n        Try\n            Console.WriteLine(\"Welcome to Data Operation Program\")\n\n            ' Input operation type\n            Console.Write(\"Enter operation type (A for Addition, S for Subtraction): \")\n            Dim OperationType As Char = Console.ReadLine().ToUpper()\n\n            ' Input number\n            Console.Write(\"Enter a number: \")\n            Dim InputNumber As Integer = Integer.Parse(Console.ReadLine())\n\n            Dim Operation As DataOperation = Nothing\n\n            ' Perform operation based on user input\n            Select Case OperationType\n                Case \"A\"\n                    Operation = New AdditionOperation()\n                Case \"S\"\n                    Operation = New SubtractionOperation()\n                Case Else\n                    Console.WriteLine(\"Invalid operation type.\")\n                    Exit Sub\n            End Select\n\n            Dim OutputNumber As Integer = Operation.PerformOperation(InputNumber)\n\n            ' Output result to the user\n            Console.WriteLine(\"Result: \" & OutputNumber)\n\n            ' Update database with operation details\n            DatabaseUpdater.UpdateDatabase(OperationType, InputNumber, OutputNumber)\n\n        Catch ex As Exception\n            Console.WriteLine(\"Error: \" & ex.Message)\n        End Try\n    End Sub\nEnd Module\n",
        "current_language": ".NET",
        "target_language": "Python"
    }

    const handleConvert = async () => {
        setIsLoading(true)
        try {
            const response = await axios.post('http://127.0.0.1:5050/api/convertCode', {
                "query": legacyCode,
                "current_language": selectedLegacyLanguage,
                "target_language": selectedConvertLanguage
            });

            if (response.data.error) {
                setIsError(true)
                setErrorText(response.data.error)
            }

            const convertedCode = response.data.result
            setConvertedCode(convertedCode)
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false)
        }
        console.log(selectedLegacyLanguage);
        console.log(selectedConvertLanguage);


    };

    const handleLegacyCodeChange = (event) => {
        setLegacyCode(event.target.value);
    };

    const handleSelectedLegacyLanguage = (event) => {
        setSelectedLegacyLanguage(event.target.value)
    }

    const handleSelectedConvertLanguage = (event) => {
        setSelectedConvertLanguage(event.target.value)
    }


    return (
        <>
            <Navbar />
            <div className="p-24 flex flex-row">
                <div className="left basis-1/2 pr-20">
                    <label htmlFor="legacy-code" className="block mb-2 text-sm font-medium text-black dark:text-black">
                        Legacy code:
                    </label>
                    <textarea
                        id="legacy-code"
                        rows="25"
                        className="block p-2.5 w-full text-sm text-gray-900
                        bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500"
                        placeholder="Enter your Legacy code here..."
                        value={legacyCode}
                        onChange={handleLegacyCodeChange}
                    ></textarea>
                    {/* <Dropdown label={"Legacy code"} options={['COBOL', 'Delphi', 'VB']} /> */}

                    <select defaultValue={".NET"} onChange={handleSelectedLegacyLanguage}>
                        <option value="COBOL">COBOL</option>
                        <option value="Delphi">Delphi</option>
                        <option value=".NET">.NET</option>
                    </select>
                </div>

                <div className="right basis-1/2 pl-20">
                    <label htmlFor="converted-code" className="block mb-2 text-sm font-medium text-black dark:text-black">
                        Converted Code:
                    </label>
                    <textarea
                        id="converted-code"
                        rows="25"
                        className="block p-2.5 w-full text-sm text-gray-900
                        bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500"
                        value={convertedCode}
                    ></textarea>
                    {/* <Dropdown label={"Code to convert"} options={['Python', 'C', 'Java']} /> */}

                    <select defaultValue={"Python"} onChange={handleSelectedConvertLanguage}>
                        <option value="Python">Python</option>
                        <option value="C">C</option>
                        <option value="Java">Java</option>
                    </select>
                </div>

            </div>
            <div className="flex justify-center items-center flex-col">
                {isError ? (<p className='text-red-500'>{errorText}</p>) : (<p className='text-red-500'></p>)}

                {isLoading ? (
                    <button disabled
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex
                    items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Loading...
                    </button>
                ) : (
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex
                    items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleConvert}
                    >
                        Convert Code
                    </button>
                )}
            </div>
        </>
    );
};
