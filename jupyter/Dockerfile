FROM continuumio/anaconda3:5.3.0 as setup
RUN conda install -y r-essentials
RUN conda install -y tensorflow
RUN conda install -y r-keras
RUN conda install -y r-catools
RUN pip install keras
RUN conda install -c c3i_test2 fonts-anaconda
RUN conda config --add channels conda-forge
RUN conda config --set channel_priority strict
RUN conda install -vvv r-plotly
# RUN conda install -y -c conda-forge r-arules 

FROM setup
RUN jupyter notebook --generate-config
COPY ./jupyter_notebook_config.py /root/.jupyter/jupyter_notebook_config.py
COPY ./jupyter_notebooks /jupyter_notebooks
EXPOSE 8888
RUN find ./jupyter_notebooks -type f -exec chmod 444 {} \;
CMD ["jupyter","notebook"]
