import React, { Component } from 'react';
import axios from 'axios';

import { apiServer } from '../../core/constants';
import TableJournals from './table';

interface JournalsProps {
  categories?: 0 | 1 | 2 | 3 | 4;
}

class Journals extends Component<JournalsProps> {
  state = {
    data: [],
    count: 0,
    errors: null,
    loading: true
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data, loading } = this.state;
    return (
      <TableJournals
        data={data}
        handleLoadMore={this.handleLoadMore}
        loading={loading}
      />
    );
  }

  getData = async () => {
    return axios
      .post(`${apiServer}/journals`, {
        data: {
          from: this.state.data.length,
          categories: this.props.categories
        }
      })
      .then(({ data }) => {
        this.setState({
          data: [...this.state.data, ...data.result],
          count: data.count || this.state.count,
          errors: data.errors || null,
          loading: false
        });
      })
      .catch(errors => {
        this.setState({ errors });
      });
  };

  handleLoadMore = () => {
    const { data, count, loading } = this.state;
    if (data.length < count && !loading) {
      this.setState({ loading: true }, () => this.getData());
    }
  };
}

export default Journals;
