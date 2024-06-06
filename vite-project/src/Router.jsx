import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import Inicio from './pages/Inicio';
import Video from './components/video/video';
import VideosCadastrados from './components/VideosCadastrados/VideosCadastrados';
import VideoCreate from './components/VideoCreate/VideoCreate';
import VideoEdit from './components/VideoCreate/VideoCreate';


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path="/video/:videoId" element={<Video />} />
                    <Route path="/videos-cadastrados" element={<VideosCadastrados />} />
                    <Route path="/video/create" element={<VideoCreate />} />
                    <Route path="/video/:videoId/edit" element={<VideoEdit />} />
                </Route>
            </Routes>
        </Router>
    )

}

export default AppRouter