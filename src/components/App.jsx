import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spiner } from './Loader/Loader';

import fetchImages from '../Servises/imgApi';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { AppStyled } from './App.Styled';

export class App extends Component {
  state = {
    images: [],
    totalHits: null,
    isLoading: false,
    error: null,
    query: '',
    page: 1,
    showModal: false,
    largeImageURL: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });

      try {
        const response = await fetchImages(query, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          totalHits: response.totalHits,
        }));
        if (page === 1 && response.totalHits !== 0) {
          toast.success(`Hooray! We found ${response.totalHits} images.`);
        }

        if (response.hits.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  showImage = value => {
    if (value.trim() === '') {
      return toast.warn('Enter your request');
    }
    this.setState({ images: [], query: value, page: 1 });
  };

  onClickLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: largeImageURL });
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.showImage} />
        {this.state.isLoading && <Spiner />}

        <ImageGallery images={this.state.images} onClick={this.toggleModal} />

        {this.state.images.length !== 0 && (
          <Button handleClick={this.onClickLoad} />
        )}

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeImageURL} alt={this.state.tags} />
          </Modal>
        )}

        <ToastContainer
          position="top-right"
          autoClose={2000}
          closeOnClick
          theme="light"
        />
      </AppStyled>
    );
  }
}
